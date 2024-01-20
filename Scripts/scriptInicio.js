parpadear();

function parpadear(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    document.getElementById("hicab").style.color="rgb(" + r + "," + g + "," + b + ")";
    setTimeout("parpadear()",300);
}
