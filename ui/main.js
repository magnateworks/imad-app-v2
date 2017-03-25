var count=0;
var button = document.getElementById("counter");
var span = document.getElementById("count");

button.onclick = function(){

    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the resopnse and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = count.toString;
            }
        }    
    };
    
    //make request
    request.open('GET', 'http://www.magnateworks.imad.hasura-app.io/counter', true);
    request.send(null);

};

