import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(logger);

function logger(req, res, next){
  console.log(req.url + " " + req.method);
  next();
}

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
