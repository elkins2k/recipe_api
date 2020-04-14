const express = require('express')
const router = express.Router()

const Recipe = require('../models/Recipe')
const Content = require('../models/Content')

router.get('/', (req, res) => {
  Recipe
    .find({})
    .then(all => res.json(all))
})

router.get('/:id', (req, res) => {
  Recipe
    .findById(req.params.id)
    .then(single => res.json(single))
})

router.post('/', (req, res) => {
  const newRecipe = {
    name: req.body.name,
    directions: req.body.directions,
    submittedBy: req.body.submittedBy
  }
  Content.findOne({mainProtein: req.body.mainProtein})
    .then(content => {
      if (!content) {
        Content
        .create({mainProtein:req.body.mainProtein})
        .then(newContent => {
          newRecipe.mainProtein = newContent._id
          Recipe
            .create(newRecipe)
            .then(recipe => res.json(recipe))
      })
    } else {
      newRecipe.mainProtein = content._id
        Recipe
          .create(newRecipe)
          .then(recipe => res.json(recipe))
    }
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
        .find({})
        .then(all => res.json(all))
    })
})

router.delete('/:id', (req, res) => {
  Recipe
    .findOneAndDelete({ _id: req.params.id })
    .then(() => {
      Recipe.find({})
        .then(all => res.json(all))
    })
})

module.exports = router