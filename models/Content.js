const mongoose = require ( '../db/connection' )

const Content = new mongoose.Schema ({
    heading: String
})

module.exports = mongoose.model ( 'Content', Content )