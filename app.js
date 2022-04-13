const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


// GLOBAL VARIABLES
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res){
	res.render("index");
});







app.listen(PORT, function(){
	console.log("Server Online. Listening at port " + PORT);
});