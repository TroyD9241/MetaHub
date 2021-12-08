import express from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// a function that gets all routes

function getUserRoutes() {
    const router = express.Router()
    router.get('/:id', getUserById)
    router.post('/', createUser)
    router.patch('/:id', updateUser)
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


export { getUserRoutes }
