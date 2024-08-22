const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')

exports.createorders = async(req,res,next)=>{

    const cartItems = req.body
    const amount  = Number(cartItems.reduce((acc,items)=>(acc + items.product.price * items.qty),0)).toFixed(2)
    console.log('amt : ',amount)
    const status = 'Pending'

    const order = await orderModel.create({cartItems,amount,status})

    cartItems.forEach(async (items) => {
        const product = await productModel.findById(items.product._id.$oid)
        product.stock = product.stock - items.qty
        await product.save() 
    })

    res.json({
        success: true,
        Message: 'Orders works!',
        order
    })
}