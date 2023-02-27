const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var groupNameElem = document.getElementById("groupName");
var groupPasswordElem = document.getElementById("groupPassword");

groupNameElem.oninput = function(){
    var groupName = groupNameElem.value;
}

groupPasswordElem.oninput = function(){
    var groupPassword = groupPasswordElem.value;
}

var submitElem = document.getElementById("groupSubmit");
submitElem.addEventListener("click", function(){
    window.location.assign("selection   -page.html");
});

