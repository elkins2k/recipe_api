const mongoose = require ( '../db/connection' )

const Recipe = new mongoose.Schema ({
  name: String,
  heading: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content'
  },
  ingredients: [],
  directions: String,
  submittedBy: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model ( 'Recipe', Recipe )