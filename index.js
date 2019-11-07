const express = require('express')
const {config} = require('./config')

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/json', (req, res) => {
    res.status(200).json({hello: 'world'})
})

app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`)
})