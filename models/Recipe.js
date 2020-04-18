const mongoose = require ( '../db/connection' )

const IngredientSchema = new mongoose.Schema({
  ingredient: String
})

const Recipe = new mongoose.Schema ({
  name: String,
  heading: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content'
  },
  ingredients: [IngredientSchema],
  directions: String,
  submittedBy: String
})

module.exports = mongoose.model ( 'Recipe', Recipe )