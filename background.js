chrome.browserAction.onClicked.addListener(function(tabs) {
  alert('Binodifying this website! All hail Binod');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {"binodify": true }, function(response) {
      });
  });
});
