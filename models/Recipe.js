const mongoose = require ( '../db/connection' )

const Recipe = new mongoose.Schema ({
  name: String,
  heading: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content'
  },
  ingredients: [],
  directions: String,
  submittedBy: String
})

module.exports = mongoose.model ( 'Recipe', Recipe )