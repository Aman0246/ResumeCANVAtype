const express=require('express')
const app=express()
require('dotenv').config()
const cors =require('cors')
const tamplateOne =require('./routes')
const mongoose = require('mongoose');1
mongoose.connect(process.env.MONGODB).then(()=>console.log("mongoose is connected...."))
.catch((e)=>{console.log("mongose is not connected")})
app.use(express.static('./public')); // Serve files from the 'public' directory

app.use(cors())
app.use(express.json())
app.use('/',tamplateOne)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})