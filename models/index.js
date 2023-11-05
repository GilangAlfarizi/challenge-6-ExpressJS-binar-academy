const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    user : prisma.user,
    category: prisma.category,
    article: prisma.article
}