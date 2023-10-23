import express from "express";

const app = express();
const d = new Date();
let inp = d.getDay(); // Returns no of weekday
var weekday = "weekday";
var advice =  "It's time to work hard"
app.set("view engine",'ejs');

app.use(getDay);

app.get("/",(req,res)=>{

    res.render('index',{ name : weekday , advice : advice});
});

app.listen(3000,()=>{console.log("App Start at 3000");});

function getDay(req,res,next) {
    if(inp == 0 || inp == 6)
    {
        weekday = "it's a weekend";
        advice = "It's time to enjoy";
    }
    next();
}