chrome.extension.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        message.innerText = request.source;
    }
});

function onWindowLoad() {

    var message = document.querySelector('#message');

    chrome.tabs.executeScript(null, {
        file: "js/jquery.js"
    }, function() {
        chrome.tabs.executeScript(null, {
            file: "js/getPagesSource.js"
        }, function() {
            if (chrome.extension.lastError) {
                message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
            }
        });
    });
}

window.onload = onWindowLoad;