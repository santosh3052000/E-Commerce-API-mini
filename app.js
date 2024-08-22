const express = require('express')
const app = express()
const dotenv = require('dotenv')
const Path = require('path')
const products = require('./routes/product')
const orders = require('./routes/order')
const ConnectDB = require('./lib/db')
dotenv.config({path:Path.join(__dirname,'config.env')})

ConnectDB()

app.use(express.json())
app.use('/api/v1',products)
app.use('/api/v1',orders)

app.listen(process.env.PORT,()=>{console.log(`The server has started @${process.env.PORT}`)})