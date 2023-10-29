import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = "3000";
var a = []; //This is my storage for my blog
var k = 0;
app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    res.render("index.ejs", { Newblog: a});
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});
app.get("/create",(req,res)=>{
    res.render("createB.ejs");
});


app.get('/blogs/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    // console.log(a[id]);
    res.render('myBlog.ejs',{myBlog:a[id]});
});

app.post("/",(req,res)=>{
    a.push({id:k , title:req.body.title , content:req.body.content});
    res.render("index.ejs", { Newblog: a});
    k++;
});

app.listen(port,()=>{
    console.log(`App Started At at Port No ${port}`);
}); 