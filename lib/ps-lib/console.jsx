console = {
  log: function(){$.writeln.call($, JSON.stringify(arguments[0]))},
  assert: function(True, message){
    if (!True) throw Error(message)
  },
}
