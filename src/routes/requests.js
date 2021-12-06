import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// a function that gets all routes

function getRequestsRoutes() {
    const router = express.Router()
    router.get('/', requests)
    return router
}

async function requests(req, res) {
    const allRequests = await prisma.request.findMany()
    res.json(allRequests)
}

export { getRequestsRoutes }
