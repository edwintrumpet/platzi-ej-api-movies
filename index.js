const express = require('express')
const { config } = require('./config')
const moviesApi = require('./routes/movies')

const app = express()

app.use(express.json())

moviesApi(app)

app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`)
})
