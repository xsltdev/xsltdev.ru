(function(args) {
  return args;
})((function() {
  var args = '@{arguments}';
  return args.replace(/^\[|\]$/g, '')
})())
