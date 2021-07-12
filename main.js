var images = [
"blue.jpg",
"Orange.png",
"purple.jpg",
"Red%20rose.jpg",
"violet.jpg",
"White.jpg",
"yellow.jpg",
 "Pink tulip.jpg"];
var i = 0;
function nextslide() {
  if(i == 8)
     {
       i=0;
     }
   
    document.getElementById("album").src = images[i];
  i++;
}
function preslide() {
  if(i == -1)
     {
       i=7;
     }
   
    document.getElementById("album").src = images[i];
  i--;
}
