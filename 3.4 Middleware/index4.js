import express from "express";
import { dirname } from 'path';
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
  // console.log("Directory "+__dirname);
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit",(req,res)=>{
  var str = req.body.street;
  var petN = req.body.pet;
  var bandN = str+""+petN;
  console.log(str," ",petN);
  res.send(`<h1>Your BandName : \n</h1><h2>${bandN}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
