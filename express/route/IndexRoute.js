const express = require('express')

const route = express.Router()

route.get('/', (req, res) => {
    res.send('/')
})

route.get('/home', (req, res) => {
    res.send('/home')
})

module.exports = route