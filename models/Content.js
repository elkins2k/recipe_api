const mongoose = require ( '../db/connection' )

const Content = new mongoose.Schema ({
  heading: String,
  lower: String
})

Content.pre ('save', function () {
  this.lower = this.heading.toLowerCase()
  return next()
})

module.exports = mongoose.model ( 'Content', Content )