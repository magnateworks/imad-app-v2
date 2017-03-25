var count=0;
var button = document.getElementById("counter");
var span = document.getElementById("count");

button.onclick = function(){
    count=count+1;
    span.innerHTML=count.toString();
};

