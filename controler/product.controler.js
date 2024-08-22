const productModel = require('../models/productModel')

exports.getProducts = async(req,res,next)=>{
    
    try{
        const products = await productModel.find()
    res.json({
        success: true,
        Message: 'Get products works!',
        products
    })
    }catch(err){
        console.log(err.Message)
        res.send('There is some prob in fetching Products :(').status(500)
    }
    
}

exports.getSingleProduct = async(req,res,next)=>{

    try{
        const productDetails = await productModel.findById(req.params.id)
        if(productDetails == undefined){
            res.json({Message:"Can't find the Product :( "})
        }else{
            res.json({
                success: true,
                Message: 'Get Single product works!',
                productDetails
            })
        }
    }catch(err){
        console.log(err.Message)
        res.send('There is some prob in fetching Product Details :(').status(500)
    }
}