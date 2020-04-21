const mongoose = require ( '../db/connection' )

const Content = new mongoose.Schema ({
  heading: String,
  lower: String
})

Content.pre ('validate', function () {
  this.lower = this.heading.toLowerCase()
  return
})

module.exports = mongoose.model ( 'Content', Content )