var color1=document.getElementById("color1");
var color2=document.querySelector("#color2");
var body=document.getElementById("gradient");
var cssgradient=document.querySelector("h3");

function background()
{
    body.style.background= "linear-gradient(to right, " +color1.value+ " ," +color2.value+ ")";

    cssgradient.textContent=body.style.background+";";

}
color1.addEventListener("input",background);

  

color2.addEventListener("input",background);
