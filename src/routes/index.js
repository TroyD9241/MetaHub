import express from 'express'

// other route imports go here
import { getUserRoutes } from './users'
import { getRequestsRoutes } from './requests'

function getRoutes() {
    // create router for all routes of our app
    const router = express.Router()

    router.use('/users', getUserRoutes())
    router.use('/requests', getRequestsRoutes())
    // additional routes below

    return router
}

export { getRoutes }
