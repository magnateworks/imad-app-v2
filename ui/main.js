console.log('Loaded!');


var element = document.getElementById("main-text");

element.innerHTML = "New Value!";

var img = document.getElementById("madi");

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}

img.OnClick = function() {
    setInterval(moveRight,50);
}
