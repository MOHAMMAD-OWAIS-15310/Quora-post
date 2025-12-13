const express=require("express");
const app=express();
const port=3000;
const path=require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
    username : "owais",
    content : "i love teaching"
    },
    {
    username : "sahil",
    content : "i love coding"
    },
    {
    username : "hussain",
    content : "i love eating"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    console.log(req.body);
    let {username,content}=req.body;
    posts.push({username, content});
    // res.send("post req working");
    res.redirect("/posts");
})

app.listen(port,(req,res)=>{
    console.log(`listening to port ${port}`);
})