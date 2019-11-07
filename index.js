const express = require('express')
const { config } = require('./config')
const moviesApi = require('./routes/movies')
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

const app = express()

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
