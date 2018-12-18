var supports = (function() {
  var div = document.createElement('div');
  var vendors = 'Khtml Ms O Moz Webkit'.split(' ');
  var len = vendors.length;

  return function(prop) {
    if (prop in div.style) return true;

    prop = prop.replace(/^[a-z]/, function(val) {
      return val.toUpperCase();
    });

    while (len--) {
      if (vendors[len] + prop in div.style) {
        return true;
      }
    }
    return false;
  };
})();

/**
 * Toggle $outdated if it detects an outdated browser
 * Heavily inspired by: https://github.com/burocratik/outdated-browser#develop
 * @param {Element} $outdated element to toggle when it detects an outdated browser
 * @param {string} lowerThan used to target browser, done in two ways: using Internet Explorer browsers as reference or specifying a CSS propert
 */
function outdatedBrowser($outdated, lowerThan){
  // Default settings
  if (!lowerThan){
    lowerThan = 'transform'
  } else {
    // Assign css3 property or js property to IE browser version
    if (lowerThan == 'IE8' || lowerThan == 'borderSpacing') {
      lowerThan = 'borderSpacing';
    } else if (lowerThan == 'IE9' || lowerThan == 'boxShadow') {
      lowerThan = 'boxShadow';
    } else if (lowerThan == 'IE10' || lowerThan == 'transform' || lowerThan == '' || typeof lowerThan === "undefined") {
      lowerThan = 'transform';
    } else if (lowerThan == 'IE11' || lowerThan == 'borderImage') {
      lowerThan = 'borderImage';
    }  else if (lowerThan == 'Edge' || lowerThan == 'js:Promise') {
      lowerThan = 'js:Promise';
    }
  }

  var validBrowser = false;

  // browser check by js props
  if(/^js:+/g.test(lowerThan)) {
    var jsProp = lowerThan.split(':')[1];
    
    if(!jsProp)
      return;

    switch (jsProp) {
      case 'Promise':
        validBrowser = window.Promise !== undefined && window.Promise !== null && Object.prototype.toString.call(window.Promise.resolve()) === '[object Promise]';
        break;
      default:
        validBrowser = false;
    }
  } else {
    // check by css3 property (transform=default)
    validBrowser = supports('' + lowerThan + '');
  }

  if (!validBrowser)
    $outdated.style.display = 'block';
}
module.exports = outdatedBrowser
