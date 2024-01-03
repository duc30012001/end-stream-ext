alert("Page loaded");

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    // Page is loaded, inject content script or perform actions
    chrome.tabs.executeScript(tabId, { file: "popup.js" });
  }
});
