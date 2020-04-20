const mongoose = require ( '../db/connection' )

const Content = new mongoose.Schema ({
    heading: String,
    lower: {
        type: String, 
        default: heading.toLowerCase()
      }
})

module.exports = mongoose.model ( 'Content', Content )