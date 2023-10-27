import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = "3000";

app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});
app.get("/create",(req,res)=>{
    res.render("createB.ejs");
});

app.post("/",(req,res)=>{
    res.render("index.ejs", { title:req.body.title , content : req.body.content});
    console.log(req.body);
});

app.listen(port,()=>{
    console.log(`App Started At at Port No ${port}`);
});