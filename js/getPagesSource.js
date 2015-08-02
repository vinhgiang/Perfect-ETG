function thechosenone(){
    console.log('Scanning');

    var theChosenOne = $('.thechosenone');
    var msg = 'Not Found :(';

    if(theChosenOne.length > 0){
        $('.thechosenone').css('border', '2px red solid');
        msg = 'Found ^,..,^';
    }

    console.log('scan complete');
    return msg;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: thechosenone(document)
});