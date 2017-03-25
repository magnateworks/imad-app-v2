var count=0;
var span = document.getElementById("counter");

span.onclick = function(){
    count=count+1;
    span.innerHTML=count.toString();
}

