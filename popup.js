chrome.tabs.query({'active': true}, function(tabs) {
  var urlSplit = tabs[0].url.split("/");
  var newUrl = urlSplit[0] + "//" + urlSplit[2]
  chrome.tabs.update(tabs[0].id, {url: newUrl});
});
