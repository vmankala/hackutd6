// Activate reader view
var pageText = document.body.innerText;
document.body.style.padding = "10px 10px 10px 10px";
document.body.innerHTML = "<h1 style='text-align:center;'>Reader View: " + document.title + "</h1>";

// Split page text by paragraph
pageText = pageText.split("\n");

// Remove small sentence fragments
for (var i = pageText.length - 1; i >= 0; i--) {
    if (pageText[i].split(" ").length <= 5) {
        pageText.splice(i, 1);
    } else {
        pageText[i] = pageText[i].split(". ");
    }
}

// Add text to reader view
for (var i = 0; i < pageText.length; i++) {
    document.body.innerHTML += "<br><br>";
    for(var j = 0; j < pageText[i].length; j++) {
        document.body.innerHTML += "<span id='" + i + "," + j + "'>" + pageText[i][j] + "</span>";
        if(j != pageText[i].length - 1) {
            document.body.innerHTML += ". ";
        }
    }
}

// Access Google Cloud NLP API
/*for(var i = 0; i < pageText.length; i++) {
    for(var j = 0; j < pageText[i].length; j++) {
        $.ajax({
            method: "POST",
            url: "https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyCMxvUvZBhUQ_w12V2GjENJkj_P_-G8-z4",
            data: {
                "encodingType": "UTF8",
                "document": {
                    "type": "PLAIN_TEXT",
                    "content": pageText[i][j]
                }
            }
        }).done((response) => {
            console.log("Response to '" + pageText[i][j] + "'\n" + JSON.stringify(response));
        });
    }
}*/