const express = require('express')
const { config } = require('./config')
const moviesApi = require('./routes/movies')
const { logErrors, errorHandler } = require('./utils/middlewares/errorHandlers')

const app = express()

app.use(express.json())

moviesApi(app)

// Error middlewares
app.use(logErrors)
app.use(errorHandler)

app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`)
})
