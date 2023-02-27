const express = require("express");
const bodyParser = require("body-parser");
const cookie = require('cookie');


const app = express();
console.log(__dirname);
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/src/auth.js", function(req, res){
    res.sendFile(__dirname + "/selection-page.html");
    console.log(req);
    cookie.serialize('user', req.body.yourName);
    cookie.serialize('group', req.body.group);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});