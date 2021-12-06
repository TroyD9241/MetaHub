import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

async function main() {
    // queries here
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)

    const allLikes = await prisma.like.findFirst()
    console.log(allLikes)

    const firstRequest = await prisma.request.findFirst()
    console.log(firstRequest)
}

main()
    .catch((e) => {
        throw e
    })

    .finally(async () => {
        await prisma.$disconnect()
    })
