console.log('Loaded!');


var element = document.getElementById("main-text");

element.innerHTML = "New Value!";

var img = document.getElementById("madi");

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}

img.onclick = function() {
    var interval = setInterval(moveRight,50);
};

var counter=0;
var element = document.getElementById("counter");

element.onclick = function(){
    counter=counter+1;
    element.innerHTML=counert.toString();
}

