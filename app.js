const express=require('express');
const PORT=7000;
const exphbs=require('express-handlebars');
const app=express();
var path=require('path');
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
app.use("/static",express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{

    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.listen(PORT,(err)=>{
    if(err)  throw err
    else{
        console.log(`ServerWork on ${PORT}`);
    }
})