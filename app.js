const express = require("express");
const bodyParser = require("body-parser");
//import $ from "jquery";
const $ = require("jquery");
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



// app.get("/", function(req, res){
//   res.sendFile(__dirname+"/index.html");
// })
app.get("/", function(req, res){
for(var i=0; i<100; i++){
  res.render("index", {i:i});
}
})


app.post("/", function(req, res){
 console.log(req.body);
})

app.listen(3000, function(){
  console.log("Server running at 3000");
})
