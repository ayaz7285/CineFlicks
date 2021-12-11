const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

//connecting to DB
mongoose.connect("mongodb://127.0.0.1:27017/CineFlicks",{
    useNewURLParser:true,
    useUnifiedTopology:true
},()=>{console.log("connected to db")});

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:String,
    address:String
})

const User = mongoose.model("User",userSchema);

const watchlistSchema = new mongoose.Schema({
    name:String,
    items:[
        {
            movie:String,
            id:String
        }
    ]
})

const Watchlist = mongoose.model("Watchlist",watchlistSchema);

app.post("/add",(req,res)=>{
    const {name,movie,id} = req.body
    const item = {
        movie:movie,
        id:id
    }
    console.log("add to watchlist",req.body)
    Watchlist.findOne({name:name},(err,user)=>{
        if(user){
            user.items.push(item)
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"movie added to old user watchlist",user:user})
                }
            })
        }else{
            const items=[item]
            const newUser = new Watchlist({name,items})
            newUser.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"new watchlist created",user:newUser})
                }
            })
        }
    })
})

app.get("/watchlist/:name",(req,res)=>{
    let name = req.params.name
    Watchlist.findOne({name:name},(err,user)=>{
        if(user){
            res.send(user)
            console.log("WatchList",user)
        }else{
            res.send({message:"cannot connect to DB"})
        }
    })
})

app.post("/login",(req,res)=>{
    const {email,password} = req.body
    console.log("data entered",req.body)
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password==user.password){
                res.send({message:"login success",user:user})
            }else{
                res.send({message:"Wrong credentials"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
})

app.post("/register",(req,res)=>{
    const {name,email,password,contact,address} = req.body
    console.log("data entered",req.body)
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exists"})
        }else{
            const user = new User({name,email,password,contact,address})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"register success",user:user})
                }
            })
        }
    })
})


app.listen(8080);
console.log('server running on port 8080');

