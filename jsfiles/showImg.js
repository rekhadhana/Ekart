var chairIndex = 1;
// showSlides(chairIndex);


function currentImage(n) {
    
    showimage(chairIndex = n);
}

function showimage(n) {
  var i;
  var chairs = document.getElementsByClassName("chairs");
  if (n > chairs.length) {
      chairIndex= 1;
    }
  if (n < 1) {
      chairIndex = chairs.length;}
  for (i = 0; i < chairs.length; i++) {
      document.getElementById("fisrstimg").style.display="none";
      document.getElementById("zoomer1").style.display="none";
      chairs[i].style.display = "none";
  }
   chairs[chairIndex-1].style.display = "block";
}
