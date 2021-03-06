exports.RuntimeServer = RuntimeServer

function RuntimeServer(context){
  this._context = context
  this._mirrorCache = new MirrorCache
}

RuntimeServer.prototype._eraseCachedObjectEverywhere = function(objectId){
  this._mirrorCache.forEach(function(_mirrorCache){
    _mirrorCache.erase(objectId)
  })
}

RuntimeServer.prototype._getCacheGroup = function(objectGroup){
  var _mirrorCache = this._mirrorCache.get(objectGroup)
  if (_mirrorCache == null)
    this._mirrorCache.set(objectGroup, _mirrorCache = new MirrorCache)
  return _mirrorCache
}

var MirrorCache = require('./MirrorCache').MirrorCache

function RemoteObjectId(object){
  
}
function RemoteObject(params, result){
  var responseRemoteObject = {
    type: "string",
    // subtype: undefined,
    // className: undefined,
    value: JSON.stringify(result),
    // description: undefined,
    // objectId: undefined,
    // preview: undefined,
  }
  
/*
  responseRemoteObject.type = typeof result
  
  if (responseRemoteObject.type == 'object'){
    if (result == null) responseRemoteObject.subtype = 'null'
    
    responseRemoteObject.objectId = params.expression
    if (Array.isArray(result)) responseRemoteObject.subtype = 'array'
    // else if (layerID in result) responseRemoteObject.subtype = 'node'
    responseRemoteObject.description = JSON.stringify(result)
    
    if (params.returnByValue)
      responseRemoteObject.value = result
    responseRemoteObject.returnByValue = params.returnByValue
  }
*/
  // else // DEBUG
  if (params.returnByValue) {
    responseRemoteObject.type = typeof result
    if (result === null) responseRemoteObject.subtype = 'null'
    else if (Array.isArray(result)) responseRemoteObject.subtype = 'array'
    responseRemoteObject.value = result
  }
  
  return responseRemoteObject
}


/*
{
    "id": "RemoteObject",
    "type": "object",
    "description": "Mirror object referencing original JavaScript object.",
    "properties": [
        { "name": "type", "type": "string", "enum": ["object", "function", "undefined", "string", "number", "boolean"], "description": "Object type." },
        { "name": "subtype", "type": "string", "optional": true, "enum": ["array", "null", "node", "regexp", "date"], "description": "Object subtype hint. Specified for <code>object</code> type values only." },
        { "name": "className", "type": "string", "optional": true, "description": "Object class (constructor) name. Specified for <code>object</code> type values only." },
        { "name": "value", "type": "any", "optional": true, "description": "Remote object value (in case of primitive values or JSON values if it was requested)." },
        { "name": "description", "type": "string", "optional": true, "description": "String representation of the object." },
        { "name": "objectId", "$ref": "RemoteObjectId", "optional": true, "description": "Unique object identifier (for non-primitive values)." },
        { "name": "preview", "$ref": "ObjectPreview", "optional": true, "description": "Preview containsing abbreviated property values.", "hidden": true }
    ]
}
*/
RuntimeServer.prototype.evaluate = function(params, callback, fire){
/*
  [
    { "name": "expression", "type": "string", "description": "Expression to evaluate." },
    { "name": "objectGroup", "type": "string", "optional": true, "description": "Symbolic group name that can be used to release multiple objects." },
    { "name": "includeCommandLineAPI", "type": "boolean", "optional": true, "description": "Determines whether Command Line API should be available during the evaluation.", "hidden": true },
    { "name": "doNotPauseOnExceptionsAndMuteConsole", "type": "boolean", "optional": true, "description": "Specifies whether evaluation should stop on exceptions and mute console. Overrides setPauseOnException state.", "hidden": true },
    { "name": "contextId", "$ref": "Runtime.ExecutionContextId", "optional": true, "description": "Specifies in which isolated context to perform evaluation. Each content script lives in an isolated context and this parameter may be used to specify one of those contexts. If the parameter is omitted or 0 the evaluation will be performed in the context of the inspected page.", "hidden": true },
    { "name": "returnByValue", "type": "boolean", "optional": true, "description": "Whether the result is expected to be a JSON object that should be sent by value." },
    { "name": "generatePreview", "type": "boolean", "optional": true, "hidden": true, "description": "Whether preview should be generated for the result." }
  ]
*/
  if (!params.objectGroup) params.objectGroup = 'default'
  
  var runtime = this
  var _mirrorCache = this._getCacheGroup(params.objectGroup)
  
  if (params.doNotPauseOnExceptionsAndMuteConsole && params.expression) {
    if (params.objectGroup == "completion"){
      callback(null, {result:{type:'object', objectId:params.expression}, wasThrown:false})
      return;
    }
    callback(null, null)
    return;
  }
  function handleResult(error, result){
    if (error) return callback(error, result);
    
    if (result && result.name && result.name.indexOf && result.name.indexOf('Error') > -1) {
      error = true
      delete result.source
    }
    
    if (runtime._context.config && runtime._context.config.debug) runtime._context.config.debug(result)
    
    var responseRemoteObject = RemoteObject(params, result)
    _mirrorCache.set(responseRemoteObject.objectId, responseRemoteObject)
    callback(null, {result:responseRemoteObject, wasThrown:!!error})
  }
  
  if (params.functionDeclaration){
    this._context.photoshop.include(this.ps_CommandLineAPI_imports).invoke('function(thisObj) { thisObj = function(){return eval(thisObj)}.call(null);\nreturn (' + params.functionDeclaration + ').call(thisObj, typeof thisObj)}', params.objectId, handleResult)
  }
  else {
    this._context.photoshop.include(this.ps_CommandLineAPI_imports).invoke('eval', params.expression, handleResult)
  }
}

if (!module.parent){
  require('tap').test('should get codecompletion for `app`', function(t){
    var params = {
      doNotPauseOnExceptionsAndMuteConsole: false,
      expression: "1+1",
      generatePreview: true,
      includeCommandLineAPI: true,
      objectGroup: "console",
      returnByValue: false,
    }
    
    var runtime = new RuntimeServer({photoshop:require('photoshop')})
    
    runtime.callFunctionOn(params, testDoer)
    
    testDoer.times = 0
    function testDoer(error, result){
      // console.log(JSON.stringify(result, null, 2))
      
      t.notOk(error)
      t.ok(result)
      t.ok(result.result)
      t.ok(result.result.type)
      t.ok(result.result.value)
      t.is(result.result.value, "2")
      t.is(result.wasThrown, false)
      
      if (testDoer.times < 5) runtime.releaseObjectGroup({objectGroup: "completion"}, function(){
        runtime.callFunctionOn(params, testDoer)
        
        testDoer.times ++
        if (testDoer.times >= 5) t.end()
      })
    }
  })
}


// Internal method; Not part of the API spec
RuntimeServer.prototype.addCommandLineAPI = function(params, callback, fire){
  if (!this.ps_CommandLineAPI_imports) this.ps_CommandLineAPI_imports = []
  var ps_CommandLineAPI_imports = this.ps_CommandLineAPI_imports
  require('fs').exists(params.path, function(exists){
    if (!exists) return callback(Error('does not exist'))
    ps_CommandLineAPI_imports.push(params.path)
    callback(null, params)
  })
}

RuntimeServer.prototype.callFunctionOn = RuntimeServer.prototype.evaluate

if (!module.parent){
  require('tap').test('should get codecompletion for `app`', function(t){
    var params = {
      doNotPauseOnExceptionsAndMuteConsole: true,
      functionDeclaration: 'function getCompletions(primitiveType)\n            {\n                var object;\n                if (primitiveType === "string")\n                    object = new String("");\n                else if (primitiveType === "number")\n                    object = new Number(0);\n                else if (primitiveType === "boolean")\n                    object = new Boolean(false);\n                else\n                    object = this;\n\n                var resultSet = {};\n                for (var o = object; o; o = o.__proto__) {\n                    try {\n                        var names = Object.getOwnPropertyNames(o);\n                        for (var i = 0; i < names.length; ++i)\n                            resultSet[names[i]] = true;\n                    } catch (e) {\n                    }\n                }\n                return resultSet;\n            }',
      generatePreview: false,
      objectGroup: "default",
      objectId: "app",
      returnByValue: true,
    }
    
    new RuntimeServer({photoshop:require('photoshop')}).callFunctionOn(params, function(error, result){
      // console.log(JSON.stringify(result, null, 2))
      
      t.notOk(error)
      t.ok(result)
      t.ok(result.result)
      t.ok(result.result.type)
      t.is(result.result.type, 'object')
      t.ok(result.result.value)
      t.is(typeof result.result.value, 'object')
      for (var key in result.result.value) {
        t.is(result.result.value[key], true, key)
      }
      t.is(result.wasThrown, false)
      
      t.end()
    })
  })
}

RuntimeServer.prototype.releaseObject = function(params, callback, fire){
  this._eraseCachedObjectEverywhere(params.objectId)
  callback(null)
}

RuntimeServer.prototype.releaseObjectGroup = function(params, callback, fire){
  this._getCacheGroup(params.objectGroup || 'default').eraseAll()
  callback(null)
}
