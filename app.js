//require packages used in the project
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generatePassword = require("./generate_password");
const port = 3000;

//require express-handlebars here
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//set routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const options = req.body;
  const password = generatePassword(req.body);
  console.log(password);
  res.render("index", { password, options });
});

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port} `);
});
