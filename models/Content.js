const mongoose = require ( '../db/connection' )

const Content = new mongoose.Schema ({
  heading: String,
  lower: String
})

module.exports = mongoose.model ( 'Content', Content )