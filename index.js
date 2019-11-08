const express = require('express')
const helmet = require('helmet')
const debug = require('debug')('app:server')
const { config } = require('./config')
const moviesApi = require('./routes/movies')
const userMoviesApi = require('./routes/userMovies')
const authApi = require('./routes/auth')
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

const app = express()
app.use(helmet())
app.use(helmet.permittedCrossDomainPolicies());
app.disable('x-powered-by');

app.use(express.json())

authApi(app)
userMoviesApi(app)
moviesApi(app)
app.use(notFoundHandler)

// Errors middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
    debug(`Server on port ${config.port}`)
})
