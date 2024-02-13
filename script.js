var display= document.querySelector("#display");

function ac(){
    display.value += " ";

}
function del(){
    display.value.toString().slice(1,-1);
    
}
function dot(){
    display.value += ".";
    
}
function divison(){
    display.value += "/";
    
}


function seven(){

    display.value += "7";

}
function eight(){
    display.value += "8";
    
}
function nine(){
    display.value += "9";
    
}
function moduels(){
    display.value += "*"

    
}
function four(){
    display.value += "4";

}
function five(){
    display.value += "5";
}
function six(){
    display.value += "6";
    
}
function substract(){
    display.value += "-"
    
}

function one(){
    display.value += "1";

}
function two(){
    display.value += "2";
    
}
function three(){
    display.value += "3";
    
}
function addition(){
    display.value += "+"
    
}
function dZero(){
    display.value += "00";

}
function zero(){
    display.value += "0";
    
}
function equal(){
    display.value = eval(display.value);
    
}


