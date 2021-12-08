//Import statements
import bodyParser from 'body-parser'
import express from 'express'
import 'express-async-errors'
import logger from 'loglevel'
// all the routes for the app are retrieved from src/routes/index.js
import { getRoutes } from './routes'

function startServer({ port = process.env.PORT } = {}) {
    const app = express()

    // Mount the entire app to the /api route
    app.use(bodyParser.json())
    app.use('/api', getRoutes())

    // add generic error handling
    app.use(errorMiddleware)

    // allows us to start the app and resolve the promise with the express server
    return new Promise(resolve => {
        const server = app.listen(port, () => {
            logger.info(`Listening on port ${server.address().port}`)
            // this block turns server.close into a promise API
            const originalCLose = server.close.bind(server)
            server.close = () => {
                return new Promise(resolveClose => {
                    originalCLose(resolveClose)
                })
            }
            // this ensures that we properly close the server when the program exists
            setupCloseOnExit(server)
            // resolve the whole promise with the express server
            resolve(server)
        })
    })
}

// Generic error handler for when errors aren't handled properly

function errorMiddleware(error, req, res, next) {
    if (res.headersSent) {
        next(error)
    } else {
        logger.error(error)
        res.status(500)
        res.json({
            message: error.message,
            // add a stack property in non-production
            ...(process.env.NODE_ENV === 'production' ? null : { stack: error.stack })
        })
    }
}

// In event of an error ensure the server is closed
function setupCloseOnExit(server) {
    async function exitHandler(options = {}) {
        await server
            .close()
            .then(() => {
                logger.info('Server successfully closed')
            })
            .catch(e => {
                logger.warn('Something went wrong closing the server', e.stack)
            })

        if (options.exit) process.exit()
    }

    // do something when app is closing
    process.on('exit', exitHandler)

    // catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(null, { exit: true }))

    // catches "kill pid" (for example: nodemon restart)
    process.on('SIGUSR1', exitHandler.bind(null, { exit: true }))
    process.on('SIGUSR2', exitHandler.bind(null, { exit: true }))

    // catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, { exit: true }))
}

export { startServer }
