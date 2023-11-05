const express = require('express'),
    router = express.Router(),
    userRouter = require('./user.router'),
    categoryRouter = require('./category.routes'),
    articleRouter = require('./article.routes')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/article', articleRouter)

module.exports = router