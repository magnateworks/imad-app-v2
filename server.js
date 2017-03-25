var express = require('express');
var morgan = require('morgan');
var path = require('path');
//var Pool = require('pool').Pool;
var crypto = require('crypto');


var articles = {
    'article-one' : {
    title : "Article One | Mangesh",
    heading : "Article One",
    date : "Mar 25 2017",
    content : `               <p>
                    This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one.
                </p>            
                <p>
                    This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one.
                </p>            
                <p>
                    This is content of article one. This is content of article one. This is content of article one. This is content of article one. This is content of article one.
                </p>`

    },
    'article-two' : {
    title : "Article Two | Mangesh",
    heading:"Article Two",
    date:"Mar 22 2017",
    content: `<p>
                    This is content of article Two.
                </p>`

    },
    'article-three' : {
    title : "Article Three | Mangesh",
    heading:"Article Three",
    date:"Mar 23 2017",
    content: `<p>
                    This is content of article Three 
                </p>`

    }
};
    
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <br/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
        
    </html>
    `
    
    return htmlTemplate;

}

var config = {
    user : 'magnateworks',
    database : 'magnateworks',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;    
  res.send(createTemplate(articles[articleName]));
});

var counter = 0 ;

app.get('/counter',function(req,res){
    counter = counter + 1 ;
    res.send(counter.toString());
});


function hash(input,salt){
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');     
    return hashed.toString('hex');
}

app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input,'this-is-string-random');
    res.send(hashedString);
})


/*var pool = new Pool(config);
app.get('/test-db', function (req, res) {
    pool.query('select * from test',function(err,result){
     if(err){
         res.status(500).send(err.toString());
     }else{
         res.send(JSON.stringify(result));
     }   
    })
   
});*/

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
