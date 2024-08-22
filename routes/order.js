const express = require('express')
const router = express.Router()
const order = require('../controler/order.controler')

router.post('/orders',(order.createorders))

module.exports = router