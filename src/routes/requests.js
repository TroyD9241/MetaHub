import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// a function that gets all routes

function getRequestsRoutes() {
    const router = express.Router()
    // '/requests/' routes
    router.get('/', allRequests)
    router.post('/', createRequest)

    // '/requests/:id/'
    router.get('/:id', getSingleRequestById)

    // '/requests/:id/likes/'
    router.post('/:id/likes', createLike)
    router.delete('/likes/:id', deleteLike)
    return router
}

async function allRequests(req, res) {
    const allRequests = await prisma.request.findMany()
    // not this simple need to implement pagination.
    // https://www.prisma.io/docs/concepts/components/prisma-client/pagination
    // also filtering https://www.prisma.io/docs/concepts/components/prisma-client/filtering-and-sorting
    res.json(allRequests)
}

async function createRequest(req, res) {
    let { title, requestContent, userId } = req.body
    userId = parseInt(userId)
    const newRequest = await prisma.request.create({
        data: {
            title: title,
            requestContent: requestContent,
            userId: userId
        }
    })

    res.json(newRequest)
}

async function getSingleRequestById(req, res) {
    const requestId = parseInt(req.params.id)

    const singleRequest = await prisma.request.findUnique({
        where: {
            id: requestId
        }
    })
    res.json(singleRequest)
}

async function createLike(req, res) {
    const requestId = parseInt(req.params.id)
    const { userId } = req.body
    const addLike = await prisma.like.create({

        data: {
            requestId: requestId,
            userId: userId,
        }
    })

    res.json(addLike)
}

async function deleteLike(req, res) {
    const likeId = parseInt(req.params.id)
    const unLike = await prisma.like.delete({
        where: {
            id: likeId
        }
    })
    res.json(unLike)
}

export { getRequestsRoutes }
