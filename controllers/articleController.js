const {article} = require('../models'),
    utils = require('../utils')

module.exports = {
    create: async (req, res, next) => {
        try {
            const fileToString = req.file.buffer.toString('base64')

            const uploadFile = await utils.imagekit.upload({
                fileName: req.file.originalname,
                file: fileToString 
            })

            const data = await article.create({
                data: {
                    title: req.body.title,
                    slug: req.body.title.replace(/\s+/g, "-"),
                    image: uploadFile.url,
                    description: req.body.description,
                    categoryId: parseInt(req.body.category_id)
                }
            })

            return res.status(201).json({
                data
            })
        } catch (error) {
            next(error)
        }
    },

    getAll: async (req, res, next) => {
        try {
            const data = await article.findMany()

            return res.status(201).json({
                data
            })

        } catch (error) {
            next(error)
        }
    },

    getId: async (req, res, next) => {
        try {
            const data = await article.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            })

            return res.status(201).json({
                data
            })

        } catch (error) {
            next(error)
        }
    },

    delete: async (req, res, next) => {
        try {
            const data = await article.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })
    
            return res.status(204).json({
                data
            })
            
        } catch (error) {
            next(error)
        }
    },

    update: async (req, res, next) => {
        try {
            const fileToString = req.file.buffer.toString('base64')

            const uploadFile = await utils.imagekit.upload({
                fileName: req.file.originalname,
                file: fileToString 
            })

            const data = await article.update({
                where: {
                    id: parseInt(req.params.id)
                },
                data: {
                    title: req.body.title,
                    slug: req.body.title.replace(/\s+/g, "-"),
                    image: uploadFile.url,
                    description: req.body.description,
                    categoryId: parseInt(req.body.category_id)
                }
            })

            return res.status(201).json({
                data
            })
        } catch (error) {
            next(error)
        }
    }
}