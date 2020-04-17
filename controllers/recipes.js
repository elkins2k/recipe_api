const express = require('express')
const router = express.Router()

const Recipe = require('../models/Recipe')
const Content = require('../models/Content')

router.get('/', (req, res) => {
  Recipe
    .find({}).populate('heading')
    .then(all => res.json(all))
})

router.get('/:id', (req, res) => {
  Recipe
    .findById(req.params.id).populate('heading')
    .then(single => res.json(single))
})

router.post('/', (req, res) => {
  let newContents={}
  const newRecipe = {
    name: req.body.name,
    instructions: req.body.instructions,
    directions: req.body.directions,
    submittedBy: req.body.submittedBy
  }
  Content
    .findOne({heading: req.body.heading})
    .then( content => {
      if (!content) {
        Content
          .create({heading:req.body.heading})
          .then(newContent => {
            newContents = newContent
            console.log('newContent',newContent)
            newRecipe.heading = newContent._id
            Recipe
              .create(newRecipe)
              .then(recipe => {
                console.log(recipe,newContents)
                res.json({recipe:recipe, newContents:newContents, line:'41'})
              })
          })
    } else {
      newContents=content
      newRecipe.heading = content._id
      Recipe
        .create(newRecipe)
        .then(recipe => res.json({recipe:recipe, newContents:newContents, line:'48'}))
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
      Recipe
        .find({}).populate('heading')
        .then(all => res.json(all))
    })
})

module.exports = router