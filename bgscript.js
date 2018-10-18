chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Remove...")
  chrome.tabs.executeScript(null, {
    file: "remove.js"
  });
});
