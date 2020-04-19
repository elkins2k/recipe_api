const express = require('express')
const router = express.Router()

const Recipe = require('../models/Recipe')
const Content = require('../models/Content')

router.get('/', (req, res) => {
  Recipe
    .find({}).populate('heading').sort('name ASC')
    .then(all => res.json(all))
})

router.get('/:id', (req, res) => {
  Recipe
    .findById(req.params.id).populate('heading')
    .then(single => res.json(single))
})

router.post('/', (req, res) => {
  const newRecipe = {
    name: req.body.name,
    instructions: req.body.instructions,
    directions: req.body.directions,
    submittedBy: req.body.submittedBy
  }
  Content
    .findOne({heading: req.body.heading})
    .then(content => {
      if (!content) {
        Content
          .create({heading:req.body.heading})
          .then(newContent => {
            newRecipe.heading = newContent._id
            Recipe
              .create(newRecipe)
              .then(recipe => {
                recipe.heading = newContent
                res.json(recipe)
              })
          })
    } else {
      Recipe
        .create(newRecipe)
        .then(recipe => {
          recipe.heading = content
          res.json(recipe)
        })
    }
  })
})

router.post('/:recipeId/new-ingredient', (req, res) => {
  Recipe
    .findById(req.params.recipeId)
    .then(recipe => {
      let newIngredient = req.body
      recipe.ingredients.push(newIngredient)
      recipe.save()
      res.json(recipe)
    })
})

router.put('/:id', (req, res) => {
  Recipe
    .findOneAndUpdate(
      { _id: req.params.id },
      (req.body)
    )
    .then(() => {
      Recipe
        .find({}).populate('heading').sort('name ASC')
        .then(all => res.json(all))
    })
})

router.delete('/:id', (req, res) => {
  Recipe
    .findOneAndDelete({ _id: req.params.id })
    .then(() => {
      Recipe
        .find({}).populate('heading').sort('name ASC')
        .then(all => res.json(all))
    })
})

router.delete("/:recipeId/delete-ingredient/:ingredientId", (req, res) => {
  Recipe
    .findById(req.params.recipeId)
    .then(recipe => {
      let ingredientIndex = recipe.ingredients.findIndex(ingredient => ingredient._id == req.params.ingredientId)
      recipe.ingredients.splice(ingredientIndex, 1)
      recipe.save()
    })
    .then(() => {
      Recipe
        .find({}).populate('heading').sort('name ASC')
        .then(all => res.json(all))
    })
})

module.exports = router