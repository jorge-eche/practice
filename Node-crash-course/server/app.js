const express = require("express"); //it returns a function

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//listen to requests
//it infers we want to use localhost so we do not need to add anything else
//it also returns an instance of the server. we could store it in a constant
//in case we need to reuse the server for web sockets or sth else.
app.listen(3000);

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
