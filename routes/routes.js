const express = require('express')
const router = express.Router()
const operations = require('../controler/routes.controler')

router.get('/',(operations.display))

router.post('/',(operations.create))

router.put('/',(operations.update))

router.delete('/',(operations.delete))

module.exports = router