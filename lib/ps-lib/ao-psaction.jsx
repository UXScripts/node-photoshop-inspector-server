var TEST = false
if (typeof module == 'object' && !module.parent){
  TEST = true

function ActionDescriptor(){}
ActionDescriptor.prototype = {

  constructor: ActionDescriptor,

  clear: function(){ // Clears the descriptor.
  },
  
  erase: function(key){ // Erases a key from the descriptor.
  },
  
  fromStream: function(value){ // Creates a descriptor from a stream of bytes; for reading from disk.
  },
  
  getBoolean: function(key){ // Gets the value of a key of type boolean.
    var _boolean
    return _boolean
  },
  
  getClass: function(key){ // Gets the value of a key of type class.
    var _number
    return _number
  },
  
  getData: function(key){ // Gets raw byte data as a string value.
    var _string
    return _string
  },
  
  getDouble: function(key){ // Gets the value of a key of type double.
    var _number
    return _number
  },
  
  getEnumerationType: function(key){ // Gets the enumeration type of a key.
    var _number
    return _number
  },
  
  getEnumerationValue: function(key){ // Gets the enumeration value of a key.
    var _number
    return _number
  },
  
  getInteger: function(key){ // Gets the value of a key of type integer.
    var _number
    return _number
  },
  
  getKey: function(index){ // Gets the ID of the Nth key, provided by index.
    var _number
    return _number
  },
  
  getLargeInteger: function(key){ // Gets the value of a key of type large integer.
    var _number
    return _number
  },
  
  getList: function(key){ // Gets the value of a key of type list.
    var _ActionList
    return _ActionList
  },
  
  getObjectType: function(key){ // Gets the class ID of an object in a key of type object.
    var _number
    return _number
  },
  
  getObjectValue: function(key){ // Gets the value of a key of type object.
    var _ActionDescriptor
    return _ActionDescriptor
  },
  
  getPath: function(key){ // Gets the value of a key of type File.
    var _File
    return _File
  },
  
  getReference: function(key){ // Gets the value of a key of type ActionReference.
    var _ActionReference
    return _ActionReference
  },
  
  getString: function(key){ // Gets the value of a key of type string.
    var _string
    return _string
  },
  
  getType: function(key){ // Gets the type of a key.
    var _DescValueType
    return _DescValueType
  },
  
  getUnitDoubleType: function(key){ // Gets the unit type of a key of type UnitDouble.
    var _number
    return _number
  },
  
  getUnitDoubleValue: function(key){ // Gets the value of a key of type UnitDouble.
    var _number
    return _number
  },
  
  hasKey: function(key){ // Checks whether the descriptor contains the provided key.
    var _boolean
    return _boolean
  },
  
  isEqual: function(otherDesc){ // Determines whether the descriptor is the same as another descriptor.
    var _boolean
    return _boolean
  },
  
  putBoolean: function(key, value){ this[key + ':Boolean'] = value },
  putClass: function(key, value){ this[key + ':Class'] = value },
  putData: function(key, value){ this[key + ':Data'] = value },
  putDouble: function(key, value){ this[key + ':Double'] = value },
  putInteger: function(key, value){ this[key + ':Integer'] = value },
  putLargeInteger: function(key, value){ this[key + ':LargeInteger'] = value },
  putList: function(key, value){ this[key + ':List'] = value },
  putPath: function(key, value){ this[key + ':Path'] = value },
  putReference: function(key, value){ this[key + ':Reference'] = value },
  putString: function(key, value){ this[key + ':String'] = value },
  
  putEnumerated: function(key, type, value){
    if (key == type) type = ''
    this[key + ':Enumerated:' + type] = value
  },
  putObject: function(key, type, value){
    if (key == type) type = ''
    this[key + ':Object:' + type] = value
  },
  putUnitDouble: function(key, type, value){
    if (key == type) type = ''
    this[key + ':UnitDouble:' + type] = value
  },
}

function ActionList(){this.type = 'ActionList'}
ActionList.prototype = {

  constructor: ActionList,

  clear: function(){ // Clears the list.
  },
  
  getBoolean: function(index){ // Gets the value of a list element of type boolean.
    var _boolean
    return _boolean
  },
  
  getClass: function(index){ // Gets the value of a list element of type class.
    var _number
    return _number
  },
  
  getData: function(index){ // Gets raw byte data as a string value.
    var _string
    return _string
  },
  
  getDouble: function(index){ // Gets the value of a list element of type double.
    var _number
    return _number
  },
  
  getEnumerationType: function(index){ // Gets the enumeration type of a list element.
    var _number
    return _number
  },
  
  getEnumerationValue: function(index){ // Gets the enumeration value of a list element.
    var _number
    return _number
  },
  
  getInteger: function(index){ // Gets the value of a list element of type integer.
    var _number
    return _number
  },
  
  getLargeInteger: function(index){ // Gets the value of a list element of type large integer.
    var _number
    return _number
  },

  getList: function(index){ // Gets the value of a list element of type list.
    var _ActionList
    return _ActionList
  },

  getObjectType: function(index){ // Gets the class ID of a list element of type object.
    var _number
    return _number
  },

  getObjectValue: function(index){ // Gets the value of a list element of type object.
    var _ActionDescriptor
    return _ActionDescriptor
  },

  getPath: function(index){ // Gets the value of a list element of type File.
    var _File
    return _File
  },

  getReference: function(index){ // Gets the value of a list element of type ActionReference.
    var _ActionReference
    return _ActionReference
  },

  getString: function(index){ // Gets the value of a list element of type string.
    var _string
    return _string
  },

  getType: function(index){ // Gets the type of a list element.
    var _DescValueType
    return _DescValueType
  },

  getUnitDoubleType: function(index){ // Gets the unit value type of a list element of type Double.
    var _number
    return _number
  },

  getUnitDoubleValue: function(index){ // Gets the unit value of a list element of type double.
    var _number
    return _number
  },
  
  length: 0,
  
  putBoolean: function(value){ActionDescriptor.prototype.putBoolean.call(this, this.length++, value)},
  putDouble: function(value){ActionDescriptor.prototype.putDouble.call(this, this.length++, value)},
  putReference: function(value){ActionDescriptor.prototype.putReference.call(this, this.length++, value)},
  putInteger: function(value){ActionDescriptor.prototype.putInteger.call(this, this.length++, value)},
  putList: function(value){ActionDescriptor.prototype.putList.call(this, this.length++, value)},
  putString: function(value){ActionDescriptor.prototype.putString.call(this, this.length++, value)},
  putPath: function(value){ActionDescriptor.prototype.putPath.call(this, this.length++, value)},
  putClass: function(value){ActionDescriptor.prototype.putClass.call(this, this.length++, value)},
  putData: function(value){ActionDescriptor.prototype.putData.call(this, this.length++, value)},
  putLargeInteger: function(value){ActionDescriptor.prototype.putLargeInteger.call(this, this.length++, value)},
  putEnumerated: function(enumType, value){ActionDescriptor.prototype.putEnumerated.call(this, this.length++, enumType, value)},
  putObject: function(classID, value){ActionDescriptor.prototype.putObject.call(this, this.length++, classID, value)},
  putUnitDouble: function(classID, value){ActionDescriptor.prototype.putUnitDouble.call(this, this.length++, classID, value)},
}

function ActionReference(){type:'ActionReference'}
ActionReference.prototype = {

  constructor: ActionReference,

  typename:"",

  getContainer: function(){
    var _ActionReference
    return _ActionReference
  },
  
  getDesiredClass: function(){
    var _number
    return _number
  },

  getEnumeratedType: function(){
    var _number
    return _number
  },

  getEnumeratedValue: function(){
    var _number
    return _number
  },

  getForm: function(){
    var _ReferenceFormType
    return _ReferenceFormType
  },
  
  getIdentifier: function(){
    var _number
    return _number
  },

  getIndex: function(){
    var _number
    return _number
  },

  getName: function(){
    var _string
    return _string
  },

  getOffset: function(){
    var _number
    return _number
  },

  getProperty: function(){
    var _number
    return _number
  },

  length:0,

  putClass: function(desiredClass){this[(this.length++) + '/:Class'] = desiredClass},
  putIdentifier: function(desiredClass, value){this[(this.length++) +'/'+ desiredClass + ':Identifier'] = value},
  putIndex: function(desiredClass, value){this[(this.length++) +'/'+ desiredClass + ':Index'] = value},
  putName: function(desiredClass, value){this[(this.length++) +'/'+ desiredClass + ':Name'] = value},
  putOffset: function(desiredClass, value){this[(this.length++) +'/'+ desiredClass + ':Offset'] = value},
  putProperty: function(desiredClass, value){this[(this.length++) +'/'+ desiredClass + ':Property'] = value},
  putEnumerated: function(desiredClass, enumType, value) {this[(this.length++) +'/'+ desiredClass +':Enumerated:'+ enumType] = value},
}

function charIDToTypeID(charID){
  return "^" + charID + ""
}
function stringIDToTypeID(stringID){
  return stringID
}

var DialogModes = {NO:'DialogModes.NO'}

// Obtains information about a predefined or recorded action.
function executeAction(eventID/*number*/, descriptor/*ActionDescriptor*/, displayDialogs/*DialogModes*/){
  var _ActionDescriptor
  console.log('executeAction', eventID/*number*/, JSON.stringify(descriptor, null, 2)/*ActionDescriptor*/, displayDialogs/*DialogModes*/)
  return _ActionDescriptor
}

// Plays an Action Manager event.
function executeActionGet(reference/*ActionReference*/){
  var _ActionDescriptor
  console.log('executeActionGet', reference/*ActionReference*/)
  return _ActionDescriptor
}

  ////////////////////////////////////////////////////////////////////////////////

  // transform({})
  
  // renameLayer("Fred")
  
  // console.log('createShapeLayer'); createShapeLayer()
  // console.log('createShapeLayerRoundRect'); createShapeLayerRoundRect()
  // console.log('createCustomShapeLayer'); createCustomShapeLayer()
  // console.log('loadVectorMaskAsSelection'); loadVectorMaskAsSelection()
  // console.log('makePathFromSelection'); makePathFromSelection()
  // console.log('defineCustomShapeFromPath'); defineCustomShapeFromPath()
  // console.log('renameCustomShape'); renameCustomShape()
  // console.log('deleteCustomShape'); deleteCustomShape()
  // console.log('exportCustomChapes'); exportCustomChapes()
  // console.log('importCustomShapes_replace'); importCustomShapes_replace()
  // console.log('selectRect'); selectRect()
  // console.log('setUserMaskToSelection'); setUserMaskToSelection()
  // console.log('createLayerSetFromSelectedLayers'); createLayerSetFromSelectedLayers()
  // console.log('createRectanglePath'); createRectanglePath()
  // console.log('makeVectorMaskUsingSelectedPath'); makeVectorMaskUsingSelectedPath()
  // console.log('selectWorkPath'); selectWorkPath()
  // console.log('deleteSelectedChannelOrMask'); deleteSelectedChannelOrMask()
  // console.log('deleteVectorMask'); deleteVectorMask()
  // console.log('combinePaths'); combinePaths()
  // console.log('removeStroke'); removeStroke()
  // console.log('setFill'); setFill()
  
}


////////////////////////////////////////////////////////////////////////////////

function populateSize(bounds){
  bounds.width = bounds.right - bounds.left
  bounds.height = bounds.bottom - bounds.top
  return bounds
}


function transformationFromBoundsToBounds(from, to){
  populateSize(from)
  populateSize(to)
  var transformation = {
    translateY: to.top - from.top,
    translateX: to.left - from.left,
    scaleX: to.height / from.width,
    scaleY: to.width / from.height,
  }
  return transformation
}
if (TEST) {
  console.log(transformationFromBoundsToBounds({top:0, left:0, bottom:100, right:100}, {top:0, left:0, bottom:50, right:50}))
  transform(transformationFromBoundsToBounds(
    { top: 0, left: 0, bottom: 100, right: 100 },
    { top: 25, left: 25, bottom: 75, right: 75 }))
}

function bounds(bounds){
  if (!(bounds && typeof bounds == 'object')) bounds = {}
  if (bounds.w) {
    bounds.width = bounds.w
    delete bounds.w
  }
  if (bounds.h) {
    bounds.height = bounds.h
    delete bounds.h
  }
  if (typeof bounds.top != 'number') bounds.top = 0
  if (typeof bounds.left != 'number') bounds.left = 0
  if (typeof bounds.bottom != 'number') bounds.bottom = bounds.top + (bounds.height || 100)
  if (typeof bounds.right != 'number') bounds.right = bounds.left + (bounds.width || 100)
  populateSize(bounds)
  return bounds
}

// function transformBounds(from, transformation){
//   var to = Object.create(from)
//   transformation.translateX
//   return to
// }


function createShapeLayer(bounds){
  if (bounds == null) bounds = {}
  // =======================================================
  var idMk = charIDToTypeID( "Mk  " );
      var desc71 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref52 = new ActionReference();
          var idcontentLayer = stringIDToTypeID( "contentLayer" );
          ref52.putClass( idcontentLayer );
      desc71.putReference( idnull, ref52 );
      var idUsng = charIDToTypeID( "Usng" );
          var desc72 = new ActionDescriptor();
          var idType = charIDToTypeID( "Type" );
              var desc73 = new ActionDescriptor();
              var idClr = charIDToTypeID( "Clr " );
                  var desc74 = new ActionDescriptor();
                  var idRd = charIDToTypeID( "Rd  " ); desc74.putDouble( idRd, 0.000000 );
                  var idGrn = charIDToTypeID( "Grn " ); desc74.putDouble( idGrn, 0.000000 );
                  var idBl = charIDToTypeID( "Bl  " ); desc74.putDouble( idBl, 0.000000 );
              var idRGBC = charIDToTypeID( "RGBC" );
              desc73.putObject( idClr, idRGBC, desc74 );
          var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
          desc72.putObject( idType, idsolidColorLayer, desc73 );
          var idShp = charIDToTypeID( "Shp " );
              var desc75 = new ActionDescriptor();
              var idTop = charIDToTypeID( "Top " ); var idPxl = charIDToTypeID( "#Pxl" ); desc75.putUnitDouble( idTop, idPxl, bounds.top || 0);
              var idLeft = charIDToTypeID( "Left" ); var idPxl = charIDToTypeID( "#Pxl" ); desc75.putUnitDouble( idLeft, idPxl, bounds.left || 0);
              var idBtom = charIDToTypeID( "Btom" ); var idPxl = charIDToTypeID( "#Pxl" ); desc75.putUnitDouble( idBtom, idPxl, bounds.bottom || 100);
              var idRght = charIDToTypeID( "Rght" ); var idPxl = charIDToTypeID( "#Pxl" ); desc75.putUnitDouble( idRght, idPxl, bounds.right || 100);
          var idRctn = charIDToTypeID( "Rctn" );
          desc72.putObject( idShp, idRctn, desc75 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
              var desc76 = new ActionDescriptor();
              var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" ); desc76.putInteger( idstrokeStyleVersion, 2 );
              var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" ); desc76.putBoolean( idstrokeEnabled, false );
              var idfillEnabled = stringIDToTypeID( "fillEnabled" ); desc76.putBoolean( idfillEnabled, true );
              var idstrokeStyleLineWidth = stringIDToTypeID( "strokeStyleLineWidth" ); var idPnt = charIDToTypeID( "#Pnt" ); desc76.putUnitDouble( idstrokeStyleLineWidth, idPnt, 3.000000 );
              var idstrokeStyleLineDashOffset = stringIDToTypeID( "strokeStyleLineDashOffset" ); var idPnt = charIDToTypeID( "#Pnt" ); desc76.putUnitDouble( idstrokeStyleLineDashOffset, idPnt, 0.000000 );
              var idstrokeStyleMiterLimit = stringIDToTypeID( "strokeStyleMiterLimit" ); desc76.putDouble( idstrokeStyleMiterLimit, 100.000000 );
              var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" ); var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" ); var idstrokeStyleButtCap = stringIDToTypeID( "strokeStyleButtCap" ); desc76.putEnumerated( idstrokeStyleLineCapType, idstrokeStyleLineCapType, idstrokeStyleButtCap );
              var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" ); var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" ); var idstrokeStyleMiterJoin = stringIDToTypeID( "strokeStyleMiterJoin" ); desc76.putEnumerated( idstrokeStyleLineJoinType, idstrokeStyleLineJoinType, idstrokeStyleMiterJoin );
              var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" ); var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" ); var idstrokeStyleAlignInside = stringIDToTypeID( "strokeStyleAlignInside" ); desc76.putEnumerated( idstrokeStyleLineAlignment, idstrokeStyleLineAlignment, idstrokeStyleAlignInside );
              var idstrokeStyleScaleLock = stringIDToTypeID( "strokeStyleScaleLock" ); desc76.putBoolean( idstrokeStyleScaleLock, false );
              var idstrokeStyleStrokeAdjust = stringIDToTypeID( "strokeStyleStrokeAdjust" ); desc76.putBoolean( idstrokeStyleStrokeAdjust, false );
              var idstrokeStyleLineDashSet = stringIDToTypeID( "strokeStyleLineDashSet" ); var list1 = new ActionList(); desc76.putList( idstrokeStyleLineDashSet, list1 );
              var idstrokeStyleBlendMode = stringIDToTypeID( "strokeStyleBlendMode" );
              var idBlnM = charIDToTypeID( "BlnM" );
              var idNrml = charIDToTypeID( "Nrml" );
              desc76.putEnumerated( idstrokeStyleBlendMode, idBlnM, idNrml );
              var idstrokeStyleOpacity = stringIDToTypeID( "strokeStyleOpacity" ); var idPrc = charIDToTypeID( "#Prc" ); desc76.putUnitDouble( idstrokeStyleOpacity, idPrc, 100.000000 );
              var idstrokeStyleContent = stringIDToTypeID( "strokeStyleContent" );
                  var desc77 = new ActionDescriptor();
                  var idClr = charIDToTypeID( "Clr " );
                      var desc78 = new ActionDescriptor();
                      var idRd = charIDToTypeID( "Rd  " ); desc78.putDouble( idRd, 0 );
                      var idGrn = charIDToTypeID( "Grn " ); desc78.putDouble( idGrn, 0 );
                      var idBl = charIDToTypeID( "Bl  " ); desc78.putDouble( idBl, 0 );
                  var idRGBC = charIDToTypeID( "RGBC" );
                  desc77.putObject( idClr, idRGBC, desc78 );
              var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
              desc76.putObject( idstrokeStyleContent, idsolidColorLayer, desc77 );
              var idstrokeStyleResolution = stringIDToTypeID( "strokeStyleResolution" ); desc76.putDouble( idstrokeStyleResolution, 72.000000 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" ); desc72.putObject( idstrokeStyle, idstrokeStyle, desc76 );
      var idcontentLayer = stringIDToTypeID( "contentLayer" ); desc71.putObject( idUsng, idcontentLayer, desc72 );
  executeAction( idMk, desc71, DialogModes.NO );
}

function createShapeLayerRoundRect(){
  // =======================================================
  var idMk = charIDToTypeID( "Mk  " );
      var desc83 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref57 = new ActionReference();
          var idcontentLayer = stringIDToTypeID( "contentLayer" );
          ref57.putClass( idcontentLayer );
      desc83.putReference( idnull, ref57 );
      var idUsng = charIDToTypeID( "Usng" );
          var desc84 = new ActionDescriptor();
          var idType = charIDToTypeID( "Type" );
              var desc85 = new ActionDescriptor();
              var idClr = charIDToTypeID( "Clr " );
                  var desc86 = new ActionDescriptor();
                  var idRd = charIDToTypeID( "Rd  " );
                  desc86.putDouble( idRd, 0.000000 );
                  var idGrn = charIDToTypeID( "Grn " );
                  desc86.putDouble( idGrn, 0.000000 );
                  var idBl = charIDToTypeID( "Bl  " );
                  desc86.putDouble( idBl, 0.000000 );
              var idRGBC = charIDToTypeID( "RGBC" );
              desc85.putObject( idClr, idRGBC, desc86 );
          var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
          desc84.putObject( idType, idsolidColorLayer, desc85 );
          var idShp = charIDToTypeID( "Shp " );
              var desc87 = new ActionDescriptor();
              var idTop = charIDToTypeID( "Top " );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc87.putUnitDouble( idTop, idPxl, 57.000000 );
              var idLeft = charIDToTypeID( "Left" );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc87.putUnitDouble( idLeft, idPxl, 58.000000 );
              var idBtom = charIDToTypeID( "Btom" );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc87.putUnitDouble( idBtom, idPxl, 131.000000 );
              var idRght = charIDToTypeID( "Rght" );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc87.putUnitDouble( idRght, idPxl, 204.000000 );
              var idRds = charIDToTypeID( "Rds " );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc87.putUnitDouble( idRds, idPxl, 10.000000 );
          var idRctn = charIDToTypeID( "Rctn" );
          desc84.putObject( idShp, idRctn, desc87 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
              var desc88 = new ActionDescriptor();
              var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" );
              desc88.putInteger( idstrokeStyleVersion, 2 );
              var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" );
              desc88.putBoolean( idstrokeEnabled, true );
              var idfillEnabled = stringIDToTypeID( "fillEnabled" );
              desc88.putBoolean( idfillEnabled, true );
              var idstrokeStyleLineWidth = stringIDToTypeID( "strokeStyleLineWidth" );
              var idPnt = charIDToTypeID( "#Pnt" );
              desc88.putUnitDouble( idstrokeStyleLineWidth, idPnt, 3.000000 );
              var idstrokeStyleLineDashOffset = stringIDToTypeID( "strokeStyleLineDashOffset" );
              var idPnt = charIDToTypeID( "#Pnt" );
              desc88.putUnitDouble( idstrokeStyleLineDashOffset, idPnt, 0.000000 );
              var idstrokeStyleMiterLimit = stringIDToTypeID( "strokeStyleMiterLimit" );
              desc88.putDouble( idstrokeStyleMiterLimit, 100.000000 );
              var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
              var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
              var idstrokeStyleButtCap = stringIDToTypeID( "strokeStyleButtCap" );
              desc88.putEnumerated( idstrokeStyleLineCapType, idstrokeStyleLineCapType, idstrokeStyleButtCap );
              var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
              var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
              var idstrokeStyleMiterJoin = stringIDToTypeID( "strokeStyleMiterJoin" );
              desc88.putEnumerated( idstrokeStyleLineJoinType, idstrokeStyleLineJoinType, idstrokeStyleMiterJoin );
              var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
              var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
              var idstrokeStyleAlignInside = stringIDToTypeID( "strokeStyleAlignInside" );
              desc88.putEnumerated( idstrokeStyleLineAlignment, idstrokeStyleLineAlignment, idstrokeStyleAlignInside );
              var idstrokeStyleScaleLock = stringIDToTypeID( "strokeStyleScaleLock" );
              desc88.putBoolean( idstrokeStyleScaleLock, false );
              var idstrokeStyleStrokeAdjust = stringIDToTypeID( "strokeStyleStrokeAdjust" );
              desc88.putBoolean( idstrokeStyleStrokeAdjust, false );
              var idstrokeStyleLineDashSet = stringIDToTypeID( "strokeStyleLineDashSet" );
                  var list2 = new ActionList();
              desc88.putList( idstrokeStyleLineDashSet, list2 );
              var idstrokeStyleBlendMode = stringIDToTypeID( "strokeStyleBlendMode" );
              var idBlnM = charIDToTypeID( "BlnM" );
              var idNrml = charIDToTypeID( "Nrml" );
              desc88.putEnumerated( idstrokeStyleBlendMode, idBlnM, idNrml );
              var idstrokeStyleOpacity = stringIDToTypeID( "strokeStyleOpacity" );
              var idPrc = charIDToTypeID( "#Prc" );
              desc88.putUnitDouble( idstrokeStyleOpacity, idPrc, 100.000000 );
              var idstrokeStyleContent = stringIDToTypeID( "strokeStyleContent" );
                  var desc89 = new ActionDescriptor();
                  var idClr = charIDToTypeID( "Clr " );
                      var desc90 = new ActionDescriptor();
                      var idRd = charIDToTypeID( "Rd  " );
                      desc90.putDouble( idRd, 239.996338 );
                      var idGrn = charIDToTypeID( "Grn " );
                      desc90.putDouble( idGrn, 61.002960 );
                      var idBl = charIDToTypeID( "Bl  " );
                      desc90.putDouble( idBl, 37.003326 );
                  var idRGBC = charIDToTypeID( "RGBC" );
                  desc89.putObject( idClr, idRGBC, desc90 );
              var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
              desc88.putObject( idstrokeStyleContent, idsolidColorLayer, desc89 );
              var idstrokeStyleResolution = stringIDToTypeID( "strokeStyleResolution" );
              desc88.putDouble( idstrokeStyleResolution, 72.000000 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
          desc84.putObject( idstrokeStyle, idstrokeStyle, desc88 );
      var idcontentLayer = stringIDToTypeID( "contentLayer" );
      desc83.putObject( idUsng, idcontentLayer, desc84 );
  executeAction( idMk, desc83, DialogModes.NO );
}

function createCustomShapeLayer(){
  // =======================================================
  var idMk = charIDToTypeID( "Mk  " );
      var desc92 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref59 = new ActionReference();
          var idcontentLayer = stringIDToTypeID( "contentLayer" );
          ref59.putClass( idcontentLayer );
      desc92.putReference( idnull, ref59 );
      var idUsng = charIDToTypeID( "Usng" );
          var desc93 = new ActionDescriptor();
          var idType = charIDToTypeID( "Type" );
              var desc94 = new ActionDescriptor();
              var idClr = charIDToTypeID( "Clr " );
                  var desc95 = new ActionDescriptor();
                  var idRd = charIDToTypeID( "Rd  " );
                  desc95.putDouble( idRd, 0.000000 );
                  var idGrn = charIDToTypeID( "Grn " );
                  desc95.putDouble( idGrn, 0.000000 );
                  var idBl = charIDToTypeID( "Bl  " );
                  desc95.putDouble( idBl, 0.000000 );
              var idRGBC = charIDToTypeID( "RGBC" );
              desc94.putObject( idClr, idRGBC, desc95 );
          var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
          desc93.putObject( idType, idsolidColorLayer, desc94 );
          var idShp = charIDToTypeID( "Shp " );
              var desc96 = new ActionDescriptor();
              var idNm = charIDToTypeID( "Nm  " );
              desc96.putString( idNm, "Like" );
              var idTop = charIDToTypeID( "Top " );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc96.putUnitDouble( idTop, idPxl, 98.000000 );
              var idLeft = charIDToTypeID( "Left" );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc96.putUnitDouble( idLeft, idPxl, 136.000000 );
              var idBtom = charIDToTypeID( "Btom" );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc96.putUnitDouble( idBtom, idPxl, 185.000000 );
              var idRght = charIDToTypeID( "Rght" );
              var idPxl = charIDToTypeID( "#Pxl" );
              desc96.putUnitDouble( idRght, idPxl, 223.000000 );
          var idcustomShape = stringIDToTypeID( "customShape" );
          desc93.putObject( idShp, idcustomShape, desc96 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
              var desc97 = new ActionDescriptor();
              var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" );
              desc97.putInteger( idstrokeStyleVersion, 2 );
              var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" );
              desc97.putBoolean( idstrokeEnabled, true );
              var idfillEnabled = stringIDToTypeID( "fillEnabled" );
              desc97.putBoolean( idfillEnabled, true );
              var idstrokeStyleLineWidth = stringIDToTypeID( "strokeStyleLineWidth" );
              var idPnt = charIDToTypeID( "#Pnt" );
              desc97.putUnitDouble( idstrokeStyleLineWidth, idPnt, 3.000000 );
              var idstrokeStyleLineDashOffset = stringIDToTypeID( "strokeStyleLineDashOffset" );
              var idPnt = charIDToTypeID( "#Pnt" );
              desc97.putUnitDouble( idstrokeStyleLineDashOffset, idPnt, 0.000000 );
              var idstrokeStyleMiterLimit = stringIDToTypeID( "strokeStyleMiterLimit" );
              desc97.putDouble( idstrokeStyleMiterLimit, 100.000000 );
              var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
              var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
              var idstrokeStyleButtCap = stringIDToTypeID( "strokeStyleButtCap" );
              desc97.putEnumerated( idstrokeStyleLineCapType, idstrokeStyleLineCapType, idstrokeStyleButtCap );
              var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
              var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
              var idstrokeStyleMiterJoin = stringIDToTypeID( "strokeStyleMiterJoin" );
              desc97.putEnumerated( idstrokeStyleLineJoinType, idstrokeStyleLineJoinType, idstrokeStyleMiterJoin );
              var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
              var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
              var idstrokeStyleAlignInside = stringIDToTypeID( "strokeStyleAlignInside" );
              desc97.putEnumerated( idstrokeStyleLineAlignment, idstrokeStyleLineAlignment, idstrokeStyleAlignInside );
              var idstrokeStyleScaleLock = stringIDToTypeID( "strokeStyleScaleLock" );
              desc97.putBoolean( idstrokeStyleScaleLock, false );
              var idstrokeStyleStrokeAdjust = stringIDToTypeID( "strokeStyleStrokeAdjust" );
              desc97.putBoolean( idstrokeStyleStrokeAdjust, false );
              var idstrokeStyleLineDashSet = stringIDToTypeID( "strokeStyleLineDashSet" );
                  var list3 = new ActionList();
              desc97.putList( idstrokeStyleLineDashSet, list3 );
              var idstrokeStyleBlendMode = stringIDToTypeID( "strokeStyleBlendMode" );
              var idBlnM = charIDToTypeID( "BlnM" );
              var idNrml = charIDToTypeID( "Nrml" );
              desc97.putEnumerated( idstrokeStyleBlendMode, idBlnM, idNrml );
              var idstrokeStyleOpacity = stringIDToTypeID( "strokeStyleOpacity" );
              var idPrc = charIDToTypeID( "#Prc" );
              desc97.putUnitDouble( idstrokeStyleOpacity, idPrc, 100.000000 );
              var idstrokeStyleContent = stringIDToTypeID( "strokeStyleContent" );
                  var desc98 = new ActionDescriptor();
                  var idClr = charIDToTypeID( "Clr " );
                      var desc99 = new ActionDescriptor();
                      var idRd = charIDToTypeID( "Rd  " );
                      desc99.putDouble( idRd, 239.996338 );
                      var idGrn = charIDToTypeID( "Grn " );
                      desc99.putDouble( idGrn, 61.002960 );
                      var idBl = charIDToTypeID( "Bl  " );
                      desc99.putDouble( idBl, 37.003326 );
                  var idRGBC = charIDToTypeID( "RGBC" );
                  desc98.putObject( idClr, idRGBC, desc99 );
              var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
              desc97.putObject( idstrokeStyleContent, idsolidColorLayer, desc98 );
              var idstrokeStyleResolution = stringIDToTypeID( "strokeStyleResolution" );
              desc97.putDouble( idstrokeStyleResolution, 72.000000 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
          desc93.putObject( idstrokeStyle, idstrokeStyle, desc97 );
      var idcontentLayer = stringIDToTypeID( "contentLayer" );
      desc92.putObject( idUsng, idcontentLayer, desc93 );
  executeAction( idMk, desc92, DialogModes.NO );
}

function loadVectorMaskAsSelection(){
  // =======================================================
  var idsetd = charIDToTypeID( "setd" );
      var desc116 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref73 = new ActionReference();
          var idChnl = charIDToTypeID( "Chnl" );
          var idfsel = charIDToTypeID( "fsel" );
          ref73.putProperty( idChnl, idfsel );
      desc116.putReference( idnull, ref73 );
      var idT = charIDToTypeID( "T   " );
          var ref74 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idPath = charIDToTypeID( "Path" );
          var idvectorMask = stringIDToTypeID( "vectorMask" );
          ref74.putEnumerated( idPath, idPath, idvectorMask );
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref74.putEnumerated( idLyr, idOrdn, idTrgt );
      desc116.putReference( idT, ref74 );
      var idVrsn = charIDToTypeID( "Vrsn" );
      desc116.putInteger( idVrsn, 1 );
      var idvectorMaskParams = stringIDToTypeID( "vectorMaskParams" );
      desc116.putBoolean( idvectorMaskParams, true );
  executeAction( idsetd, desc116, DialogModes.NO );
}

function makePathFromSelection(){
  var idMk = charIDToTypeID( "Mk  " );
      var desc123 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref82 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          ref82.putClass( idPath );
      desc123.putReference( idnull, ref82 );
      var idFrom = charIDToTypeID( "From" );
          var ref83 = new ActionReference();
          var idcsel = charIDToTypeID( "csel" );
          var idfsel = charIDToTypeID( "fsel" );
          ref83.putProperty( idcsel, idfsel );
      desc123.putReference( idFrom, ref83 );
      var idTlrn = charIDToTypeID( "Tlrn" );
      var idPxl = charIDToTypeID( "#Pxl" );
      desc123.putUnitDouble( idTlrn, idPxl, 2.000000 );
  executeAction( idMk, desc123, DialogModes.NO );
}

function defineCustomShapeFromPath(){
  var idMk = charIDToTypeID( "Mk  " );
      var desc126 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref87 = new ActionReference();
          var idcustomShape = stringIDToTypeID( "customShape" );
          ref87.putClass( idcustomShape );
      desc126.putReference( idnull, ref87 );
      var idUsng = charIDToTypeID( "Usng" );
          var ref88 = new ActionReference();
          var idPrpr = charIDToTypeID( "Prpr" );
          var idfsel = charIDToTypeID( "fsel" );
          ref88.putProperty( idPrpr, idfsel );
          var idDcmn = charIDToTypeID( "Dcmn" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref88.putEnumerated( idDcmn, idOrdn, idTrgt );
      desc126.putReference( idUsng, ref88 );
      var idNm = charIDToTypeID( "Nm  " );
      desc126.putString( idNm, "Shape 1" );
  executeAction( idMk, desc126, DialogModes.NO );
}

function renameCustomShape(){
  var idRnm = charIDToTypeID( "Rnm " );
      var desc128 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref90 = new ActionReference();
          var idcustomShape = stringIDToTypeID( "customShape" );
          ref90.putIndex( idcustomShape, 74 );
      desc128.putReference( idnull, ref90 );
      var idT = charIDToTypeID( "T   " );
      desc128.putString( idT, "My Awesome Shape" );
  executeAction( idRnm, desc128, DialogModes.NO );
}

function deleteCustomShape(){
  var idDlt = charIDToTypeID( "Dlt " );
      var desc129 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref91 = new ActionReference();
          var idcustomShape = stringIDToTypeID( "customShape" );
          ref91.putIndex( idcustomShape, 74 );
      desc129.putReference( idnull, ref91 );
  executeAction( idDlt, desc129, DialogModes.NO );
}

function exportCustomChapes(){
  var idsetd = charIDToTypeID( "setd" );
      var desc130 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
      desc130.putPath( idnull, new File( "/Users/aylott/Desktop/Untitled Custom Shapes.csh" ) );
      var idT = charIDToTypeID( "T   " );
          var ref92 = new ActionReference();
          var idPrpr = charIDToTypeID( "Prpr" );
          var idcustomShape = stringIDToTypeID( "customShape" );
          ref92.putProperty( idPrpr, idcustomShape );
          var idcapp = charIDToTypeID( "capp" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref92.putEnumerated( idcapp, idOrdn, idTrgt );
      desc130.putReference( idT, ref92 );
  executeAction( idsetd, desc130, DialogModes.NO );
}

function importCustomShapes_replace(){
  var idsetd = charIDToTypeID( "setd" );
      var desc131 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref93 = new ActionReference();
          var idPrpr = charIDToTypeID( "Prpr" );
          var idcustomShape = stringIDToTypeID( "customShape" );
          ref93.putProperty( idPrpr, idcustomShape );
          var idcapp = charIDToTypeID( "capp" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref93.putEnumerated( idcapp, idOrdn, idTrgt );
      desc131.putReference( idnull, ref93 );
      var idT = charIDToTypeID( "T   " );
      desc131.putPath( idT, new File( "/Users/aylott/Desktop/Untitled Custom Shapes.csh" ) );
  executeAction( idsetd, desc131, DialogModes.NO );
}

function selectRect(){
  var idsetd = charIDToTypeID( "setd" );
      var desc170 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref122 = new ActionReference();
          var idChnl = charIDToTypeID( "Chnl" );
          var idfsel = charIDToTypeID( "fsel" );
          ref122.putProperty( idChnl, idfsel );
      desc170.putReference( idnull, ref122 );
      var idT = charIDToTypeID( "T   " );
          var desc171 = new ActionDescriptor();
          var idTop = charIDToTypeID( "Top " );
          var idPxl = charIDToTypeID( "#Pxl" );
          desc171.putUnitDouble( idTop, idPxl, 169.000000 );
          var idLeft = charIDToTypeID( "Left" );
          var idPxl = charIDToTypeID( "#Pxl" );
          desc171.putUnitDouble( idLeft, idPxl, 52.000000 );
          var idBtom = charIDToTypeID( "Btom" );
          var idPxl = charIDToTypeID( "#Pxl" );
          desc171.putUnitDouble( idBtom, idPxl, 211.000000 );
          var idRght = charIDToTypeID( "Rght" );
          var idPxl = charIDToTypeID( "#Pxl" );
          desc171.putUnitDouble( idRght, idPxl, 94.000000 );
      var idRctn = charIDToTypeID( "Rctn" );
      desc170.putObject( idT, idRctn, desc171 );
  executeAction( idsetd, desc170, DialogModes.NO );
}

function setUserMaskToSelection(){
  var idMk = charIDToTypeID( "Mk  " );
      var desc172 = new ActionDescriptor();
      var idNw = charIDToTypeID( "Nw  " );
      var idChnl = charIDToTypeID( "Chnl" );
      desc172.putClass( idNw, idChnl );
      var idAt = charIDToTypeID( "At  " );
          var ref123 = new ActionReference();
          var idChnl = charIDToTypeID( "Chnl" );
          var idChnl = charIDToTypeID( "Chnl" );
          var idMsk = charIDToTypeID( "Msk " );
          ref123.putEnumerated( idChnl, idChnl, idMsk );
      desc172.putReference( idAt, ref123 );
      var idUsng = charIDToTypeID( "Usng" );
      var idUsrM = charIDToTypeID( "UsrM" );
      var idRvlS = charIDToTypeID( "RvlS" );
      desc172.putEnumerated( idUsng, idUsrM, idRvlS );
  executeAction( idMk, desc172, DialogModes.NO );
}

function createLayerSetFromSelectedLayers(){
  var idMk = charIDToTypeID( "Mk  " );
      var desc175 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref126 = new ActionReference();
          var idlayerSection = stringIDToTypeID( "layerSection" );
          ref126.putClass( idlayerSection );
      desc175.putReference( idnull, ref126 );
      var idFrom = charIDToTypeID( "From" );
          var ref127 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref127.putEnumerated( idLyr, idOrdn, idTrgt );
      desc175.putReference( idFrom, ref127 );
  executeAction( idMk, desc175, DialogModes.NO );
}

function createRectanglePath(bounds){
  if (bounds == null) bounds = {}
  var idsetd = charIDToTypeID( "setd" );
      var desc182 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref133 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idWrPt = charIDToTypeID( "WrPt" );
          ref133.putProperty( idPath, idWrPt );
      desc182.putReference( idnull, ref133 );
      var idT = charIDToTypeID( "T   " );
          var desc183 = new ActionDescriptor();
          var idTop = charIDToTypeID( "Top " ); var idPxl = charIDToTypeID( "#Pxl" ); desc183.putUnitDouble( idTop, idPxl, bounds.top || 0);
          var idLeft = charIDToTypeID( "Left" ); var idPxl = charIDToTypeID( "#Pxl" ); desc183.putUnitDouble( idLeft, idPxl, bounds.left || 0);
          var idBtom = charIDToTypeID( "Btom" ); var idPxl = charIDToTypeID( "#Pxl" ); desc183.putUnitDouble( idBtom, idPxl, bounds.bottom || 100);
          var idRght = charIDToTypeID( "Rght" ); var idPxl = charIDToTypeID( "#Pxl" ); desc183.putUnitDouble( idRght, idPxl, bounds.right || 100);
      var idRctn = charIDToTypeID( "Rctn" );
      desc182.putObject( idT, idRctn, desc183 );
  executeAction( idsetd, desc182, DialogModes.NO );
}

function makeVectorMaskUsingSelectedPath(){
  var idMk = charIDToTypeID( "Mk  " );
      var desc184 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref134 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          ref134.putClass( idPath );
      desc184.putReference( idnull, ref134 );
      var idAt = charIDToTypeID( "At  " );
          var ref135 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idPath = charIDToTypeID( "Path" );
          var idvectorMask = stringIDToTypeID( "vectorMask" );
          ref135.putEnumerated( idPath, idPath, idvectorMask );
      desc184.putReference( idAt, ref135 );
      var idUsng = charIDToTypeID( "Usng" );
          var ref136 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref136.putEnumerated( idPath, idOrdn, idTrgt );
      desc184.putReference( idUsng, ref136 );
  executeAction( idMk, desc184, DialogModes.NO );
}

function selectWorkPath(){
  var idslct = charIDToTypeID( "slct" );
      var desc185 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref137 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idWrPt = charIDToTypeID( "WrPt" );
          ref137.putProperty( idPath, idWrPt );
      desc185.putReference( idnull, ref137 );
  executeAction( idslct, desc185, DialogModes.NO );
}

function selectVectorMaskPath(){
  var idslct = charIDToTypeID( "slct" );
      var desc1129 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref918 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idPath = charIDToTypeID( "Path" );
          var idvectorMask = stringIDToTypeID( "vectorMask" );
          ref918.putEnumerated( idPath, idPath, idvectorMask );
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref918.putEnumerated( idLyr, idOrdn, idTrgt );
      desc1129.putReference( idnull, ref918 );
  executeAction( idslct, desc1129, DialogModes.NO );
}

function refToCurrentPath(){
  var ref163 = new ActionReference();
  var idPath = charIDToTypeID( "Path" );
  var idOrdn = charIDToTypeID( "Ordn" );
  var idTrgt = charIDToTypeID( "Trgt" );
  ref163.putEnumerated( idPath, idOrdn, idTrgt );
  return ref163
}

function fs_writeFileSync(path, data){
  var file = new File(path);
  file.open('w');
  file.writeln(data);
  file.close();
  return file
}

function deleteSelectedChannelOrMask(){
  var idDlt = charIDToTypeID( "Dlt " );
      var desc186 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref138 = new ActionReference();
          var idChnl = charIDToTypeID( "Chnl" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref138.putEnumerated( idChnl, idOrdn, idTrgt );
      desc186.putReference( idnull, ref138 );
  executeAction( idDlt, desc186, DialogModes.NO );
}

function deleteVectorMask(){
  var idDlt = charIDToTypeID( "Dlt " );
      var desc188 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref140 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idPath = charIDToTypeID( "Path" );
          var idvectorMask = stringIDToTypeID( "vectorMask" );
          ref140.putEnumerated( idPath, idPath, idvectorMask );
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref140.putEnumerated( idLyr, idOrdn, idTrgt );
      desc188.putReference( idnull, ref140 );
  executeAction( idDlt, desc188, DialogModes.NO );
}

function combinePaths(){
  var idcombine = stringIDToTypeID( "combine" );
      var desc210 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref163 = new ActionReference();
          var idPath = charIDToTypeID( "Path" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref163.putEnumerated( idPath, idOrdn, idTrgt );
      desc210.putReference( idnull, ref163 );
  executeAction( idcombine, desc210, DialogModes.NO );
}

function removeStroke(){
  var idsetd = charIDToTypeID( "setd" );
      var desc337 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref275 = new ActionReference();
          var idcontentLayer = stringIDToTypeID( "contentLayer" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref275.putEnumerated( idcontentLayer, idOrdn, idTrgt );
      desc337.putReference( idnull, ref275 );
      var idT = charIDToTypeID( "T   " );
          var desc338 = new ActionDescriptor();
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
              var desc339 = new ActionDescriptor();
              var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" );
              desc339.putInteger( idstrokeStyleVersion, 2 );
              var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" );
              desc339.putBoolean( idstrokeEnabled, false );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
          desc338.putObject( idstrokeStyle, idstrokeStyle, desc339 );
      var idshapeStyle = stringIDToTypeID( "shapeStyle" );
      desc337.putObject( idT, idshapeStyle, desc338 );
  executeAction( idsetd, desc337, DialogModes.NO );
}

function setFill(){
  var idsetd = charIDToTypeID( "setd" );
      var desc340 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref276 = new ActionReference();
          var idcontentLayer = stringIDToTypeID( "contentLayer" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref276.putEnumerated( idcontentLayer, idOrdn, idTrgt );
      desc340.putReference( idnull, ref276 );
      var idT = charIDToTypeID( "T   " );
          var desc341 = new ActionDescriptor();
          var idFlCn = charIDToTypeID( "FlCn" );
              var desc342 = new ActionDescriptor();
              var idClr = charIDToTypeID( "Clr " );
                  var desc343 = new ActionDescriptor();
                  var idRd = charIDToTypeID( "Rd  " );
                  desc343.putDouble( idRd, 239.996338 );
                  var idGrn = charIDToTypeID( "Grn " );
                  desc343.putDouble( idGrn, 61.002960 );
                  var idBl = charIDToTypeID( "Bl  " );
                  desc343.putDouble( idBl, 37.003326 );
              var idRGBC = charIDToTypeID( "RGBC" );
              desc342.putObject( idClr, idRGBC, desc343 );
          var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
          desc341.putObject( idFlCn, idsolidColorLayer, desc342 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
              var desc344 = new ActionDescriptor();
              var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" );
              desc344.putInteger( idstrokeStyleVersion, 2 );
              var idfillEnabled = stringIDToTypeID( "fillEnabled" );
              desc344.putBoolean( idfillEnabled, true );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
          desc341.putObject( idstrokeStyle, idstrokeStyle, desc344 );
      var idshapeStyle = stringIDToTypeID( "shapeStyle" );
      desc340.putObject( idT, idshapeStyle, desc341 );
  executeAction( idsetd, desc340, DialogModes.NO );
}

function duplicateSelectedLayer(){
  executeAction( charIDToTypeID( "CpTL" ), undefined, DialogModes.NO );
}

function transform(transformation){
  if (transformation == null) throw Error('expected transformation object')
  
  var idTrnf = charIDToTypeID( "Trnf" );
      var desc724 = new ActionDescriptor();
      var idFTcs = charIDToTypeID( "FTcs" ); var idQCSt = charIDToTypeID( "QCSt" ); var idQcszero = charIDToTypeID( "Qcs0" ); desc724.putEnumerated( idFTcs, idQCSt, idQcszero );
      var idOfst = charIDToTypeID( "Ofst" );
          var desc725 = new ActionDescriptor();
          var idHrzn = charIDToTypeID( "Hrzn" ); var idPxl = charIDToTypeID( "#Pxl" ); desc725.putUnitDouble( idHrzn, idPxl, transformation.translateX || 0 );
          var idVrtc = charIDToTypeID( "Vrtc" ); var idPxl = charIDToTypeID( "#Pxl" ); desc725.putUnitDouble( idVrtc, idPxl, transformation.translateY || 0 );
      var idOfst = charIDToTypeID( "Ofst" );
      desc724.putObject( idOfst, idOfst, desc725 );
      var idWdth = charIDToTypeID( "Wdth" ); var idPrc = charIDToTypeID( "#Prc" ); desc724.putUnitDouble( idWdth, idPrc, (transformation.scaleX || transformation.scale || 1)*100 );
      var idHght = charIDToTypeID( "Hght" ); var idPrc = charIDToTypeID( "#Prc" ); desc724.putUnitDouble( idHght, idPrc, (transformation.scaleY || transformation.scale || 1)*100 );
      var idLnkd = charIDToTypeID( "Lnkd" ); desc724.putBoolean( idLnkd, false );
  executeAction( idTrnf, desc724, DialogModes.NO );
}

function selectNoLayers(){
  var idselectNoLayers = stringIDToTypeID( "selectNoLayers" );
      var desc1054 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref875 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref875.putEnumerated( idLyr, idOrdn, idTrgt );
      desc1054.putReference( idnull, ref875 );
  executeAction( idselectNoLayers, desc1054, DialogModes.NO );
}

function selectedLayersRef() {
  var ref = new ActionReference
  ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"))
  return ref
}

function newDocumentWithLayers(layerRef){
  // if (layerRef == null) throw Error('layerRef == null; try selectedLayersRef()')
  layerRef = selectedLayersRef()
  
  var idMk = charIDToTypeID( "Mk  " );
      var desc5 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref4 = new ActionReference();
          var idDcmn = charIDToTypeID( "Dcmn" );
          ref4.putClass( idDcmn );
      desc5.putReference( idnull, ref4 );
      var idUsng = charIDToTypeID( "Usng" );
      desc5.putReference( idUsng, layerRef );
      var idVrsn = charIDToTypeID( "Vrsn" );
      desc5.putInteger( idVrsn, 5 );
  executeAction( idMk, desc5, DialogModes.NO );
}

function renameLayer(layerRef, name){
  if (arguments.length < 2){
    name = layerRef
    layerRef = undefined
  }
  if (layerRef == null)
    layerRef = new ActionReference(); var idLyr = charIDToTypeID( "Lyr " ); var idOrdn = charIDToTypeID( "Ordn" ); var idTrgt = charIDToTypeID( "Trgt" ); layerRef.putEnumerated( idLyr, idOrdn, idTrgt );
  
  var idsetd = charIDToTypeID( "setd" );
      var desc710 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
      desc710.putReference( idnull, layerRef );
      var idT = charIDToTypeID( "T   " );
          var desc711 = new ActionDescriptor();
          var idNm = charIDToTypeID( "Nm  " );
          desc711.putString( idNm, name);
      var idLyr = charIDToTypeID( "Lyr " );
      desc710.putObject( idT, idLyr, desc711 );
  executeAction( idsetd, desc710, DialogModes.NO );
}

function placePDF(file, transformation){
  file = new File(file)
  if (!file.exists) throw Error('file not found "' + file + '"');
  if (transformation == null) transformation = {}
  
  var idPlc = charIDToTypeID( "Plc " );
      var desc10 = new ActionDescriptor();
      var idAs = charIDToTypeID( "As  " );
          var desc11 = new ActionDescriptor();
          var idfsel = charIDToTypeID( "fsel" ); var idpdfSelection = stringIDToTypeID( "pdfSelection" ); var idpage = stringIDToTypeID( "page" ); desc11.putEnumerated( idfsel, idpdfSelection, idpage );
          var idPgNm = charIDToTypeID( "PgNm" ); desc11.putInteger( idPgNm, 1 );
          var idCrop = charIDToTypeID( "Crop" ); var idcropTo = stringIDToTypeID( "cropTo" ); var idmediaBox = stringIDToTypeID( "mediaBox" ); desc11.putEnumerated( idCrop, idcropTo, idmediaBox );
      var idPDFG = charIDToTypeID( "PDFG" ); desc10.putObject( idAs, idPDFG, desc11 );
      var idnull = charIDToTypeID( "null" ); desc10.putPath( idnull, file);
      
      var idFTcs = charIDToTypeID( "FTcs" ); var idQCSt = charIDToTypeID( "QCSt" ); var idQcszero = charIDToTypeID( "Qcs0" ); desc10.putEnumerated( idFTcs, idQCSt, idQcszero );
      
      var idOfst = charIDToTypeID( "Ofst" );
          var desc12 = new ActionDescriptor();
          var idHrzn = charIDToTypeID( "Hrzn" ); var idPxl = charIDToTypeID( "#Pxl" ); desc12.putUnitDouble( idHrzn, idPxl, transformation.translateX || 0 );
          var idVrtc = charIDToTypeID( "Vrtc" ); var idPxl = charIDToTypeID( "#Pxl" ); desc12.putUnitDouble( idVrtc, idPxl, transformation.translateY || 0 );
      var idOfst = charIDToTypeID( "Ofst" ); desc10.putObject( idOfst, idOfst, desc12 );
      
      var idWdth = charIDToTypeID( "Wdth" ); var idPrc = charIDToTypeID( "#Prc" ); desc10.putUnitDouble( idWdth, idPrc, (transformation.scaleX || transformation.scale || 1)*100 );
      var idHght = charIDToTypeID( "Hght" ); var idPrc = charIDToTypeID( "#Prc" ); desc10.putUnitDouble( idHght, idPrc, (transformation.scaleY || transformation.scale || 1)*100 );
      
      var idAntA = charIDToTypeID( "AntA" ); desc10.putBoolean( idAntA, true );
  executeAction( idPlc, desc10, DialogModes.NO );
}

function selectAllLayers() {
  executeAction(stringIDToTypeID("selectAllLayers"), (function(config) {
    var descriptor = new ActionDescriptor;
    if ("null" in config) descriptor.putReference(stringIDToTypeID("null"), config["null"]);
    return descriptor
  })({
    "null": (function(config) {
      var ref = new ActionReference;
      if (0 in config) ref.putEnumerated(stringIDToTypeID("layer"), stringIDToTypeID("ordinal"), config[0]);
      return ref
    })([stringIDToTypeID("targetEnum")])
  }), DialogModes.NO);
}

function refToSelectedLayer(){
  var ref = new ActionReference();
  var idLyr = charIDToTypeID( "Lyr " );
  var idOrdn = charIDToTypeID( "Ordn" );
  var idTrgt = charIDToTypeID( "Trgt" );
  return ref
}

function createRectangleShapeLayer(bounds){
  if (bounds == null) bounds = {}
  
  var idMk = charIDToTypeID( "Mk  " );
      var desc80 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref31 = new ActionReference();
          var idcontentLayer = stringIDToTypeID( "contentLayer" );
          ref31.putClass( idcontentLayer );
      desc80.putReference( idnull, ref31 );
      var idUsng = charIDToTypeID( "Usng" );
          var desc81 = new ActionDescriptor();
          var idType = charIDToTypeID( "Type" );
              var desc82 = new ActionDescriptor();
              var idClr = charIDToTypeID( "Clr " );
                  var desc83 = new ActionDescriptor();
                  var idRd = charIDToTypeID( "Rd  " ); desc83.putDouble( idRd, 143.997803 );
                  var idGrn = charIDToTypeID( "Grn " ); desc83.putDouble( idGrn, 73.998871 );
                  var idBl = charIDToTypeID( "Bl  " ); desc83.putDouble( idBl, 171.001282 );
              var idRGBC = charIDToTypeID( "RGBC" ); desc82.putObject( idClr, idRGBC, desc83 );
          var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
          desc81.putObject( idType, idsolidColorLayer, desc82 );
          var idShp = charIDToTypeID( "Shp " );
              var desc84 = new ActionDescriptor();
              var idTop = charIDToTypeID( "Top " ); var idPxl = charIDToTypeID( "#Pxl" ); desc84.putUnitDouble( idTop, idPxl, bounds.top || 0 );
              var idLeft = charIDToTypeID( "Left" ); var idPxl = charIDToTypeID( "#Pxl" ); desc84.putUnitDouble( idLeft, idPxl, bounds.left || 0 );
              var idBtom = charIDToTypeID( "Btom" ); var idPxl = charIDToTypeID( "#Pxl" ); desc84.putUnitDouble( idBtom, idPxl, bounds.bottom || 100 );
              var idRght = charIDToTypeID( "Rght" ); var idPxl = charIDToTypeID( "#Pxl" ); desc84.putUnitDouble( idRght, idPxl, bounds.right || 100 );
          var idRctn = charIDToTypeID( "Rctn" ); desc81.putObject( idShp, idRctn, desc84 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
              var desc85 = new ActionDescriptor();
              var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" ); desc85.putInteger( idstrokeStyleVersion, 2 );
              var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" ); desc85.putBoolean( idstrokeEnabled, false );
              var idfillEnabled = stringIDToTypeID( "fillEnabled" ); desc85.putBoolean( idfillEnabled, true );
              var idstrokeStyleLineWidth = stringIDToTypeID( "strokeStyleLineWidth" ); var idPnt = charIDToTypeID( "#Pnt" ); desc85.putUnitDouble( idstrokeStyleLineWidth, idPnt, 0 );
              var idstrokeStyleLineDashOffset = stringIDToTypeID( "strokeStyleLineDashOffset" ); var idPnt = charIDToTypeID( "#Pnt" ); desc85.putUnitDouble( idstrokeStyleLineDashOffset, idPnt, 0.000000 );
              var idstrokeStyleMiterLimit = stringIDToTypeID( "strokeStyleMiterLimit" ); desc85.putDouble( idstrokeStyleMiterLimit, 100.000000 );
              var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" ); var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" ); var idstrokeStyleButtCap = stringIDToTypeID( "strokeStyleButtCap" ); desc85.putEnumerated( idstrokeStyleLineCapType, idstrokeStyleLineCapType, idstrokeStyleButtCap );
              var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" ); var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" ); var idstrokeStyleMiterJoin = stringIDToTypeID( "strokeStyleMiterJoin" ); desc85.putEnumerated( idstrokeStyleLineJoinType, idstrokeStyleLineJoinType, idstrokeStyleMiterJoin );
              var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" ); var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" ); var idstrokeStyleAlignInside = stringIDToTypeID( "strokeStyleAlignInside" ); desc85.putEnumerated( idstrokeStyleLineAlignment, idstrokeStyleLineAlignment, idstrokeStyleAlignInside );
              var idstrokeStyleScaleLock = stringIDToTypeID( "strokeStyleScaleLock" ); desc85.putBoolean( idstrokeStyleScaleLock, false );
              var idstrokeStyleStrokeAdjust = stringIDToTypeID( "strokeStyleStrokeAdjust" ); desc85.putBoolean( idstrokeStyleStrokeAdjust, false );
              var idstrokeStyleLineDashSet = stringIDToTypeID( "strokeStyleLineDashSet" ); var list2 = new ActionList(); desc85.putList( idstrokeStyleLineDashSet, list2 );
              var idstrokeStyleBlendMode = stringIDToTypeID( "strokeStyleBlendMode" ); var idBlnM = charIDToTypeID( "BlnM" ); var idNrml = charIDToTypeID( "Nrml" ); desc85.putEnumerated( idstrokeStyleBlendMode, idBlnM, idNrml );
              var idstrokeStyleOpacity = stringIDToTypeID( "strokeStyleOpacity" ); var idPrc = charIDToTypeID( "#Prc" ); desc85.putUnitDouble( idstrokeStyleOpacity, idPrc, 100.000000 );
              var idstrokeStyleContent = stringIDToTypeID( "strokeStyleContent" );
                  var desc86 = new ActionDescriptor();
                  var idClr = charIDToTypeID( "Clr " );
                      var desc87 = new ActionDescriptor();
                      var idRd = charIDToTypeID( "Rd  " ); desc87.putDouble( idRd, 111.002197 );
                      var idGrn = charIDToTypeID( "Grn " ); desc87.putDouble( idGrn, 181.001129 );
                      var idBl = charIDToTypeID( "Bl  " ); desc87.putDouble( idBl, 83.998718 );
                  var idRGBC = charIDToTypeID( "RGBC" ); desc86.putObject( idClr, idRGBC, desc87 );
              var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" ); desc85.putObject( idstrokeStyleContent, idsolidColorLayer, desc86 );
              var idstrokeStyleResolution = stringIDToTypeID( "strokeStyleResolution" ); desc85.putDouble( idstrokeStyleResolution, 72.000000 );
          var idstrokeStyle = stringIDToTypeID( "strokeStyle" ); desc81.putObject( idstrokeStyle, idstrokeStyle, desc85 );
      var idcontentLayer = stringIDToTypeID( "contentLayer" ); desc80.putObject( idUsng, idcontentLayer, desc81 );
  executeAction( idMk, desc80, DialogModes.NO );
}

function unselectLayerByRef(layerRef){
  var idslct = charIDToTypeID( "slct" );
      var desc135 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
      desc135.putReference( idnull, layerRef );
      var idselectionModifier = stringIDToTypeID( "selectionModifier" );
      var idselectionModifierType = stringIDToTypeID( "selectionModifierType" );
      var idremoveFromSelection = stringIDToTypeID( "removeFromSelection" );
      desc135.putEnumerated( idselectionModifier, idselectionModifierType, idremoveFromSelection );
      var idMkVs = charIDToTypeID( "MkVs" );
      desc135.putBoolean( idMkVs, false );
  executeAction( idslct, desc135, DialogModes.NO );
}

function createLayerSet(name, layerRef){
  if (layerRef == null) layerRef = selectedLayersRef()
  
  var config = {
    "null":	(function(config){
      var ref = new ActionReference;
      if (0 in config)	ref.putClass(config[0]);
      return ref
    })([stringIDToTypeID("layerSection")]),
    "from":	layerRef
  }
  
  if (name)
    config.using = (function(config){
      var descriptor = new ActionDescriptor;
      if ("name" in config)	descriptor.putString(stringIDToTypeID("name"), config["name"]);
      return descriptor
    })({ "name": name })
  
  executeAction(stringIDToTypeID("make"), (function(config){
  	var descriptor = new ActionDescriptor;
  	if ("null" in config)	descriptor.putReference(stringIDToTypeID("null"), config["null"]);
  	if ("from" in config)	descriptor.putReference(stringIDToTypeID("from"), config["from"]);
  	if ("using" in config)	descriptor.putObject(stringIDToTypeID("using"), stringIDToTypeID("layerSection"), config["using"]);
  	return descriptor
  })(config), DialogModes.NO);
}

function setLayerIndex(layerRef, index){
  var idmove = charIDToTypeID( "move" );
      var desc152 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" ); desc152.putReference( idnull, layerRef );
      var idT = charIDToTypeID( "T   " );
          var ref85 = new ActionReference();
          var idLyr = charIDToTypeID( "Lyr " ); ref85.putIndex( idLyr, index );
      desc152.putReference( idT, ref85 );
      var idAdjs = charIDToTypeID( "Adjs" ); desc152.putBoolean( idAdjs, false );
      var idVrsn = charIDToTypeID( "Vrsn" ); desc152.putInteger( idVrsn, 5 );
  executeAction( idmove, desc152, DialogModes.NO );
}

function layerRef_setOpacity(layerRef, opacity){
  var idsetd = charIDToTypeID( "setd" );
      var desc3 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
      desc3.putReference( idnull, layerRef );
      var idT = charIDToTypeID( "T   " );
          var desc4 = new ActionDescriptor();
          var idOpct = charIDToTypeID( "Opct" );
          var idPrc = charIDToTypeID( "#Prc" );
          desc4.putUnitDouble( idOpct, idPrc, opacity );
      var idLyr = charIDToTypeID( "Lyr " );
      desc3.putObject( idT, idLyr, desc4 );
  executeAction( idsetd, desc3, DialogModes.NO );
}

function scaleSmartObjectInnards(layerRef, scale){
  
}

function ao_LayerStyle(){}

ao_LayerStyle.save = function(file){
  file = new File(file)
  var idsetd = charIDToTypeID( "setd" );
      var desc2 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" ); desc2.putPath( idnull, file );
      var idT = charIDToTypeID( "T   " );
          var ref1 = new ActionReference();
          var idPrpr = charIDToTypeID( "Prpr" ); var idStyl = charIDToTypeID( "Styl" ); ref1.putProperty( idPrpr, idStyl );
          var idcapp = charIDToTypeID( "capp" ); var idOrdn = charIDToTypeID( "Ordn" ); var idTrgt = charIDToTypeID( "Trgt" ); ref1.putEnumerated( idcapp, idOrdn, idTrgt );
      desc2.putReference( idT, ref1 );
  executeAction( idsetd, desc2, DialogModes.NO );
}

ao_LayerStyle.replace = function(file){
  file = new File(file)
  if (!file.exists) throw Error('file "' + file + '" does not exist')
  var idsetd = charIDToTypeID( "setd" );
      var desc5 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref5 = new ActionReference();
          var idPrpr = charIDToTypeID( "Prpr" );
          var idStyl = charIDToTypeID( "Styl" );
          ref5.putProperty( idPrpr, idStyl );
          var idcapp = charIDToTypeID( "capp" );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          ref5.putEnumerated( idcapp, idOrdn, idTrgt );
      desc5.putReference( idnull, ref5 );
      var idT = charIDToTypeID( "T   " );
      desc5.putPath( idT, file);
  executeAction( idsetd, desc5, DialogModes.NO );
}

ao_LayerStyle.clearFrom = function(layerRef){
  if (layerRef == null) layerRef = selectedLayersRef()
  var idclearStyle = stringIDToTypeID( "clearStyle" );
      var desc54 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
      desc54.putReference( idnull, layerRef );
  executeAction( idclearStyle, desc54, DialogModes.NO );
}

ao_LayerStyle.applyTo = function(styleName, layerRef){
  if (layerRef == null) layerRef = selectedLayersRef()
  
  executeAction(stringIDToTypeID("applyStyle"), (function(config){ var descriptor = new ActionDescriptor; if ("null" in config) descriptor.putReference(stringIDToTypeID("null"), config["null"]); if ("to" in config) descriptor.putReference(stringIDToTypeID("to"), config["to"]); return descriptor })({
  	"null":	(function(config){ var ref = new ActionReference; if (0 in config) ref.putName(stringIDToTypeID("style"), config[0]); return ref })
    ([styleName]),
  	"to":	layerRef
  }), DialogModes.NO);
}

ao_LayerStyle.makeFromLayer = function(name, layerRef){
  if (layerRef == null) layerRef = selectedLayersRef()
  
  var idMk = charIDToTypeID( "Mk  " );
      var desc17 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref20 = new ActionReference();
          var idStyl = charIDToTypeID( "Styl" ); ref20.putClass( idStyl );
      desc17.putReference( idnull, ref20 );
      var idNm = charIDToTypeID( "Nm " ); desc17.putString( idNm, name );
      var idUsng = charIDToTypeID( "Usng" ); desc17.putReference( idUsng, layerRef );
      var idblendOptions = stringIDToTypeID( "blendOptions" ); desc17.putBoolean( idblendOptions, false );
      var idLefx = charIDToTypeID( "Lefx" ); desc17.putBoolean( idLefx, true );
  executeAction( idMk, desc17, DialogModes.NO );
}

ao_LayerStyle.clearAll = function(){
  var idDlt = charIDToTypeID( "Dlt " );
      var desc60 = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
          var ref56 = new ActionReference();
          var idStyl = charIDToTypeID( "Styl" ); ref56.putIndex( idStyl, 1 );
      desc60.putReference( idnull, ref56 );
  
  var done = false
  while (!done){
    try {
      executeAction( idDlt, desc60, DialogModes.NO );
    } catch(e){done = true}
  }
}

ao_LayerStyle.setFillFor = function(fill, layerRef){
  if (layerRef == null) layerRef = selectedLayersRef()
  
    ao_LayerStyle.refFrom().putObject(stringIDToTypeID('solidFill'))
}

function ao_LayerStyleFill(color){
  if (!(color instanceof ActionDescriptor)){
    var _color = color
    if (_color == null) _color = {}
    color = new ActionDescriptor();
    var idRd = charIDToTypeID( "Rd " ); color.putDouble( idRd, _color.red || 255.000000 );
    var idGrn = charIDToTypeID( "Grn " ); color.putDouble( idGrn, _color.green || _color.grain || 0.000000 );
    var idBl = charIDToTypeID( "Bl " ); color.putDouble( idBl, _color.blue || 0.000000 );
  }
  var idSoFi = charIDToTypeID( "SoFi" );
      var desc69 = new ActionDescriptor();
      var idenab = charIDToTypeID( "enab" );
      desc69.putBoolean( idenab, true );
      var idMd = charIDToTypeID( "Md  " );
      var idBlnM = charIDToTypeID( "BlnM" );
      var idNrml = charIDToTypeID( "Nrml" );
      desc69.putEnumerated( idMd, idBlnM, idNrml );
      var idOpct = charIDToTypeID( "Opct" );
      var idPrc = charIDToTypeID( "#Prc" );
      desc69.putUnitDouble( idOpct, idPrc, 100.000000 );
      var idClr = charIDToTypeID( "Clr " );
      var idRGBC = charIDToTypeID( "RGBC" ); desc69.putObject( idClr, idRGBC, color );
  var idSoFi = charIDToTypeID( "SoFi" );
  return desc69
}


ao_LayerStyle.setStyleDescriptorOn = function(styleDesc, layerRef){}

ao_LayerStyle.refFrom = function(layerRef){
  if (layerRef == null) layerRef = selectedLayersRef()
  return executeActionGet(layerRef).getObjectValue(stringIDToTypeID('layerEffects'))
}


