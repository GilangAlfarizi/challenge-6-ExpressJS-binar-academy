const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/categoryController')

router.post('/create', controller.create)
router.get('/:id', controller.getId)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router