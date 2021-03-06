;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['lodash'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('lodash'));
  } else {
    // Browser globals (root is window)
    root.YourModuleHere = factory(root._);
  }
}(this, function (_) {
  
  return YourModuleHere;
  
  function YourModuleHere() {
    
  }
  
}));