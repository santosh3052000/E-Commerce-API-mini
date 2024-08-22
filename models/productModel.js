const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discription:String,
    ratings:String,
    images:[
        {
            image:String
        }
    ],
    catogory:String,
    seller:String,
    stock:Number,
    reviews:String,
    createdAt:Date
})

const productModel = mongoose.model('Product',productSchema)

module.exports = productModel