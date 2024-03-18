import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

// npm init -y
// npm i express

// netstat -ano | findstr "LISTENING" // for windows check all listeners