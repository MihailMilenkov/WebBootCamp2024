import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function bandNameGenerator(req, res, next) { //middleware
  console.log(req.body);
  bandName = req.body.street + req.body.pet;
  next();
}
app.use(bandNameGenerator); 

app.post("/submit", (req, res) => {
  var html = "<h1>" + "req.body.street" + "</h1>";
  res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
