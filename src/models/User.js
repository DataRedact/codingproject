const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    password: String, 
    basket: Array
})

const User = mongoose.model('User', userSchema)

module.exports = User