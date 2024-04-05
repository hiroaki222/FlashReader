chrome.contextMenus.create({
  "title": "FlashRead!",
  "type": "normal",
  "id": "id-FlashReader",
  "contexts": ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "id-FlashReader") {
    var selectedText = info.selectionText;
    //var selectedText = "test";
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        if (request.message === "FlashReader") {
          sendResponse({data: selectedText});
        }
      }
    );
    chrome.tabs.create({'url': chrome.runtime.getURL("flash.html")});
  }
});