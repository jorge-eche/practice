const express = require("express"); //it returns a function
const morgan = require("morgan");
const mongoose = require("mongoose");

//express app
const app = express();

//connect to MongoDB
const dbURI =
  "mongodb+srv://cokoeche:Alfalfa2412@nodetuts.ttrxa85.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((error) => console.log(error));

//register view engine
app.set("view engine", "ejs");

//listen to requests
//it infers we want to use localhost so we do not need to add anything else
//it also returns an instance of the server. we could store it in a constant
//in case we need to reuse the server for web sockets or sth else.

//middleware and static files
app.use(express.static("public"));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectur",
    },
    {
      title: "How to defeat Bowser",
      snippet: "Lorem ipsum dolor sit amet consectur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
