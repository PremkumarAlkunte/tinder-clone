const Cards= require('./Modals/dbCards')
const express=require ('express');
const mongoose= require ('mongoose');
const Cors=require('cors')

const app=express()
const port=process.env.PORT||8001
//Middlewares
app.use(express.json())
app.use(Cors())
//DB config
const connection_url="mongodb+srv://Prem:Prem@cluster0.7fxx0jv.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connection_url,(data)=>{
 console.log("Successfully connected to db")
},(err)=>{
    console.log(err)
})
//API Endpoints
app.get('/',(req,res)=>{
    res.status(200).send("Hello Clever Programmers!!!")
})
app.post("/tinder/cards",(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})
app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})
app.listen(port,()=>console.log(`listening on localhost:${port}`))







