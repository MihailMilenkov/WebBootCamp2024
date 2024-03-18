import express from "express";
const app = express();
const port = 3000;
// npm i -g nodemon
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.send("GET home");
});

app.get("/about", (req, res) => {
    res.send("GET about page");
});

app.get("/contact", (req, res) => {
    res.send("GET contact page");
});
