const mongoose = require('mongoose')
const schema =mongoose.Schema

const movieSchema = new schema({
            id: Number,
            name: String,
            description: String
})
module.exports = mongoose.model('movies',movieSchema,'movies')