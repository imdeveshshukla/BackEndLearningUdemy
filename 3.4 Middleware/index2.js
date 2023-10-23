import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use((req,res,next)=>{
  console.log("Method",req.url);
  next();
});
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
