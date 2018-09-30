//When dom loaded, draw on canvas
document.addEventListener('DOMContentLoaded', domloaded, false);
function domloaded() {
    //Initialise
    var testCanvas = document.getElementById("testCanvas");
    var context = testCanvas.getContext("2d");

    //draw line
    context.moveTo(10, 10);
    context.lineTo(300, 40);
    context.stroke();
}