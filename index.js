const express = require('express')
const helmet = require('helmet')
const { config } = require('./config')
const moviesApi = require('./routes/movies')
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

const app = express()
app.use(helmet())
app.use(helmet.permittedCrossDomainPolicies());
app.disable('x-powered-by');

app.use(express.json())

moviesApi(app)
app.use(notFoundHandler)

// Errors middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`)
})
