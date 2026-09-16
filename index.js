let express=require("express");
let app=express();

app.get("/getStudents",(req,res)=>{
    res.send("students called");
})