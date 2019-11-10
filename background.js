chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: 'external/jquery-3.4.1.min.js'
    });
    chrome.tabs.executeScript({
        file: 'analyze.js'
    });
});