const express = require('express')
const ejs = require('ejs')
const app = express()
const user = require('./routers/user.js')
app.set('view engine', 'ejs');
app.use(user)
require('./db/db')


const User = require('./models/User')

const newuser = new User({
    email: 'test@example.com',
    password: 'SweetJesus2'
})

newuser.save()
app.listen(3000, () => {
    console.log('app listening on port 3000')
})