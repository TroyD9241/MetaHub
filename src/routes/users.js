import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// a function that gets all routes

function getUserRoutes() {
    const router = express.Router()
    router.get('/', users)
    return router
}

async function users(req, res) {
    const users = await prisma.user.findMany()
    res.json(users)
}

export { getUserRoutes }
