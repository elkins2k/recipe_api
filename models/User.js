const mongoose = require ( '../db/connection' )

const User = new mongoose.Schema ({
  email: String,
  firstName: String,
  lastName: String,
  avoids: {
    carbs: {
      type: Boolean, 
      default: false
    },
    dairy: {
      type: Boolean, 
      default: false
    },
    eggs: {
      type: Boolean, 
      default: false
    },
    gluten: {
      type: Boolean, 
      default: false
    },
    meat: {
      type: Boolean, 
      default: false
    },
    nuts: {
      type: Boolean, 
      default: false
    },
    quinoa: {
      type: Boolean, 
      default: true
    },
    shellfish: {
      type: Boolean, 
      default: false
    },
    spicy: {
      type: Boolean, 
      default: false
    }    
  }
})

module.exports = mongoose.model ( 'User', User )