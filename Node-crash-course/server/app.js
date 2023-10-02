const express = require("express"); //it returns a function

//express app
const app = express();

//listen to requests
//it infers we want to use localhost so we do not need to add anything else
//it also returns an instance of the server. we could store it in a constant
//in case we need to reuse the server for web sockets or sth else.
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("/views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("/views/about.html", { root: __dirname });
});

//redirect
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404
app.use((req, res) => {
  res.status(404).sendFile("/views/404.html", { root: __dirname });
});
