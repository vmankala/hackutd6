chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: 'external/jquery-3.4.1.min.js'
    });
    chrome.tabs.executeScript({
        file: 'analyze.js'
    });
});

chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        if(request.title="nlp") {
            $.ajax({
                method: "POST",
                url: "https://language.googleapis.com/v1/documents:analyzeSentiment?key=oof",
                contentType : "application/json; charset=utf-8",
                data: JSON.stringify({
                    "encodingType": "UTF8",
                    "document": {
                        "type": "PLAIN_TEXT",
                        "content": request.text
                    }
                }),
                success: function(result) {
                    sendResponse({"nlp": result, "index": request.index});
                }
            })
        }
    });