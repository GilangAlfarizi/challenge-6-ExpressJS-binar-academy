const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/articleController'),
    multer = require('multer')()

router.post('/create', multer.single('image'), controller.create)
router.put('/:id', multer.single('image'), controller.update)
router.get('/', controller.getAll)
router.get('/:id', controller.getId)
router.delete('/:id', controller.delete)

module.exports = router
