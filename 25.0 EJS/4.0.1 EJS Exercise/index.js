import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let advice = "it's time to work hard!";
    console.log(day);

    if (day === 0 || day === 6) {
        type = "the weekend";
        advice = "it's time to have fun!"
    }

    res.render("index.ejs", {     
        dayType: type, 
        dayAdvice: advice
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})