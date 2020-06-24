const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded(
  { extended: true }
))

app.use(express.static("public"));

var date = new Date();

options = {
  weekday: "long",
  month:"long",
  day:"numeric",
}

day = date.toLocaleDateString("en-US", options);

app.get("/", (req,res)=>{
  res.render("list", {day:day, newItems: items });
})

app.post("/", (req, res)=>{
  item = req.body.newValue;
  items.push(item);
  res.redirect("/");
})

app.listen(3000, ()=>{
  console.log("server started on port 3000");
});
