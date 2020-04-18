const express = require ( 'express' )
const router = express.Router ()

const Content = require ( '../models/Content')

router.get ('/', ( req, res ) => {
  Content
    .find ({}).sort('heading ASC')
    .then ( all => res.json ( all ))
})

router.get ('/:id', ( req, res ) => {
  Content
    .findById ( req.params.id )
    .then ( single => res.json ( single ))
})

router.post ('/', ( req, res ) => {
  Content
    .create ( req.body )
    .then ( () => {
      Content
        .find ({}).sort('heading ASC')
        .then (all => res.json ( all ))
    })
})

router.put ( '/:id', ( req, res ) => {
  Content
    .findOneAndUpdate (
      { _id: req.params.id },
      ( req.body )
    )
    .then ( () => {
      Content
      .find ({}).sort('heading ASC')
      .then ( all => res.json ( all ))
    })
})

router.delete ( '/:id', ( req, res ) => {
  Content
    .findOneAndDelete ({ _id: req.params.id })
    .then ( () => {
      Content
        .find ({}).sort('heading ASC')
        .then (all => res.json ( all ))
    })
})

module.exports = router