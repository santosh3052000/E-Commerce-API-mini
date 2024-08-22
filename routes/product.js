const express = require('express')
const router = express.Router()
const products = require('../controler/product.controler')

router.get('/products',(products.getProducts))
router.get('/product/:id',(products.getSingleProduct))

module.exports = router