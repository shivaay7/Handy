const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 8000
const {MONGOURI} = require('./keys')
const path = require('path');
const hbs = require("hbs");

require('./models/user')

const static_path = path.join(__dirname,"./public")
const template_path = path.join(__dirname,"./templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine','hbs');
app.set('views',template_path);

app.use(express.static(static_path));

app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI)
mongoose.set("strictQuery", false);
mongoose.connection.on('connected',()=>{
    console.log("connected with database")
})

mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})

app.get("/",(req,res) => {
    res.render('home',{error:''})
});

app.get("/signup",(req,res) => {
    res.render('signup',{error:''})
});
app.get("/login",(req,res) => {
    res.render('login',{error:''})
});

app.listen(port,()=>{
    console.log('server is running successfully')
})