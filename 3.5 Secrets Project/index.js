//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser  from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
var usrAuth = false
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.use(authenticate);
app.post("/check",(req,res)=>{
    if(usrAuth)
        res.sendFile(__dirname+"/public/secret.html");
    else
        res.sendFile(__dirname+"/public/index.html");
});

app.listen(3000,()=>{console.log("App Start at 3000");});

function authenticate(req,res,next){
    if(req.body.password == "ILoveProgramming")
        usrAuth = true;

    next();
}