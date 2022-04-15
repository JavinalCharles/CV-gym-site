const express = require("express");
const bodyParser = require("body-parser");
const Instagram = require("instagram-web-api");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// SET UP INSTAGRAM
// const client = new Instagram({username: 'javinalcharles', password: 'CadfEr05?13'});
//
// client.login().then(() => {
// 	console.log("Instagram user successfully logged in.");
// });

// GLOBAL VARIABLES
const PORT = process.env.PORT || 3000;

// async function getPhotos() {
// 	let photos = await client.getPhotosByUsername({username: 'volition.nz', first: 6});
//
// 	return photos;
// }



// ROUTES

app.get("/", function(req, res){
	res.render("index", {pageTitle: "home"});
});

app.get("/about", function(req, res){
	// let data = {pageTitle: "about"};
	// client.getPhotosByUsername({username: 'volition.nz', first: 6}).then((photos) => {
	// 	console.log("Image suucessfully fetched");
	// 	data.photos = photos;
	// 	console.log(photos.user.edge_owner_to_timeline_media.edges);
	// 	res.render("index", data);
	// }, (reason) => {
	// 	console.log("Something went wrong while try to fetch images.");
	// 	data.rejection = reason;
	// 	res.render("index", data);
	// });
	res.render("index", {pageTitle: "about"});
});

app.get("/classes", function(req, res){
	res.render("index", {pageTitle: "classes"})
});

app.get("/services", function(req, res){
	res.render("index", {pageTitle: "services"})
});

app.get("/team", function(req, res){
	res.render("index", {pageTitle: "team"})
});

app.listen(PORT, function(){
	console.log("Server Online. Listening at port " + PORT);
});
