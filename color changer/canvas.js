const body = document.querySelector("body");

// function set(name){
//     body.style.backgroundColor = name;
// }
function set(colorName) {
    if (colorName === 'red') {
        red = 255;
        green = 0;
        blue = 0;
    } else if (colorName === 'blue') {
        red = 0;
        green = 0;
        blue = 255;
    } else if (colorName === 'green') {
        red = 0;
        green = 255;
        blue = 0;
    }
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

let red = 0;
let green = 0;
let blue = 0;

function random(){
    red=Math.floor(Math.random()*255);
    green=Math.floor(Math.random()*255);
    blue=Math.floor(Math.random()*255);
    body.style.backgroundColor = `rgb(${red},${green},${blue})`//"rgb(" + red + "," + green + "," + blue + ")";
}

function lighter(){
    var a=20;
    red+=a;
    green+=a;
    blue+=a;
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function darker(){
    
    var a=20;
    red-=a;
    green-=a;
    blue-=a;
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}


