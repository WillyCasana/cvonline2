var i = 0;
var txt = "¡Bienvenidos a mi portafolio online! Soy Willy Casana.";
var speed = 50;

$(document).ready(function(){
  typeWriter();
})

function typeWriter() {

  
  if (i < txt.length) {
    document.getElementById("bienvenido_effect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else
  {
    document.getElementById("cursor_effect").style.visibility="visible";
    setInterval(parpadear,500);
  }
}
function parpadear()
{
  if (document.getElementById("cursor_effect").style.visibility=="visible")
  {
    document.getElementById("cursor_effect").style.visibility="hidden";
     
  }else
  {
   document.getElementById("cursor_effect").style.visibility="visible";
  }
 
}