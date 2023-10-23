import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{len:"Enter your name below 👇",f:0});
});

app.post("/submit", (req, res) => {
  const length = req.body.fName.length + req.body.lName.length;
  res.render("index.ejs",{len:"There are "+length+" letters in your name" , f:1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
