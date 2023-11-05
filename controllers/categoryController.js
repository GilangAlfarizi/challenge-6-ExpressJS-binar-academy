const { category } = require('../models'),
    errorHandler = require('../middlewares/errorHandler')
    

module.exports = {
    create: async (req, res, next) => {
        try {
            const data = await category.create({
                data: {
                    name: req.body.name,
                    isActive: req.body.is_active
                }
            })

            return res.status(201).json({
                data
            })

        } catch (error) {
            next(error)
        }
    },

    getId: async (req, res, next) => {
        try {
            const data = await category.findUnique({
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

    update: async (req, res, next) => {
        try {
            const data = await category.update({
                where: {
                    id: parseInt(req.params.id),
                },
                data: {
                    name: req.body.name,
                    isActive: req.body.is_active
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
            const data = await category.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })
    
            return res.status(204).json()
            
        } catch (error) {
            next(error)
        }
    }
}
