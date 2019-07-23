var zoomer1 = document.getElementById('zoomer1');
var firstimg = document.getElementById('fisrstimg');
var secimg = document.getElementById("secimg");
var thirdimg = document.getElementById("thirdimg");
var fourthimg = document.getElementById("fourthimg");
var i = 1;
function deepdive1() {
    zoomlevel = zoomer1.valueAsNumber;
    firstimg.style.webkitTransform = "scale(" + zoomlevel + ")";
    firstimg.style.transform = "scale(" + zoomlevel + ")";
}
var zoomer2 = document.getElementById('zoomer2');

function deepdive2() {
    zoomlevel = zoomer2.valueAsNumber;
    secimg.style.webkitTransform = "scale(" + zoomlevel + ")";
    secimg.style.transform = "scale(" + zoomlevel + ")";
}
var zoomer3 = document.getElementById('zoomer3');

function deepdive3() {
    zoomlevel = zoomer3.valueAsNumber;
    thirdimg.style.webkitTransform = "scale(" + zoomlevel + ")";
    thirdimg.style.transform = "scale(" + zoomlevel + ")";
}
var zoomer4 = document.getElementById('zoomer4');

function deepdive4() {
    zoomlevel = zoomer4.valueAsNumber;
    fourthimg.style.webkitTransform = "scale(" + zoomlevel + ")";
    firstimg.style.transform = "scale(" + zoomlevel + ")";
}