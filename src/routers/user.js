const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello world')
})

router.get('/dashboard', auth,  (req, res) => {
    res.send({
        information: 'hello',
        code: req.among
    })
})

module.exports = router