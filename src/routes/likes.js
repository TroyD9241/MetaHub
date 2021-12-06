import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// a function that gets all routes

function getLikesRoutes() {
    const router = express.Router()
    router.get('/', likes)
    return router
}

async function likes(req, res) {
    const likes = await prisma.like.findMany()
    res.json(likes)
}

export { getLikesRoutes }
