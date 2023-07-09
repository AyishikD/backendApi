const express=require("express");
const cors=require("cors");

app.use(cors());

const app =express();
const port = process.env.PORT||8080;
const apiData= require("./data.json");

app.get("/",(req,res)=>{
  res.send("Hello");
});

app.get("/service",(req,res)=>{
    res.send(apiData);
});

app.listen(port,()=>{
console.log("hello");
});