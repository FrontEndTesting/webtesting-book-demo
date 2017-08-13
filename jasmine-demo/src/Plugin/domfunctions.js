/* domfunctions.js */
function changeContainerText(txt) {
    if (typeof txt === 'undefined') {
        txt = 'hello world';
    }

    $("#container").text(txt);
}