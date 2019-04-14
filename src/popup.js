const bwipjs = require('bwip-js');

const generator = function() {
  chrome.tabs.getSelected(null, function(tab) {
    var currentPageUrl = tab.url || '';
    bwipjs('barcode-canvas', {
      bcid:        'azteccode',       // Barcode type
      text:        currentPageUrl,    // Text to encode
      scale:       3,               // 3x scaling factor
      height:      25,              // Bar height, in millimeters
      width:       25,
      includetext: true,            // Show human-readable text
      textxalign:  'center',        // Always good to set this
    }, function (err, cvs) {
      if (err) {
          // Decide how to handle the error
          // `err` may be a string or Error object
      } else {
          // Nothing else to do in this example...
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', function() {
  generator();
});
