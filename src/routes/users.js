import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// a function that gets all routes

function getUserRoutes() {
    const router = express.Router()
    // '/' routes
    router.post('/', createUser)
    // '/:id' routes
    router.get('/:id', getUserById)
    router.patch('/:id', updateUser)
    // router.delete('/:id')
    return router
}

// http://localhost:5000/api/users || Create a new user.
async function createUser(req, res) {
    const { email, hashedPassword, company, developer, role, pfp, resume } = req.body

    const newUser = await prisma.user.create({
        //Reference the SCHEMA ! prisma/schema.prisma
        data: {
            email: email,
            hashedPassword: hashedPassword,
            company: company,
            developer: developer,
            role: role,
            pfp: pfp,
            resume: resume
        },
    })
    res.json(newUser)
}

async function getUserById(req, res) {
    const id = parseInt(req.params.id)
    const user = await prisma.user.findUnique({
        where: {
            id: id
        },
    })

    res.json(user)
}

async function updateUser(req, res) {
    const id = parseInt(req.params.id)
    const { email, hashedPassword, company, developer, role, pfp, resume } = req.body
    const updatedUser = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            email: email,
            hashedPassword: hashedPassword,
            company: company,
            developer: developer,
            role: role,
            pfp: pfp,
            resume: resume
        },
    })
    res.json(updatedUser)
}
// needs work
async function deleteAccount(req, res) {
    const id = parseInt(req.params.id)

    const deleted = await prisma.user.delete({
        where: {
            id: id
        },


        // need to examine this. Probably need to assign the "to be" deleted users related tables to a new account?
        // "deleted" perhaps?
    })

    res.json(deleted.id)
}


export { getUserRoutes }
