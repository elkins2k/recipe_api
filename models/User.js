const mongoose = require ( '../db/connection' )

const User = new mongoose.Schema ({
  email: String,
  firstName: String,
  lastName: String,
  avoids: {
    carbs: Boolean,
    dairy: Boolean,
    eggs: Boolean,
    gluten: Boolean,
    meat: Boolean,
    nuts: Boolean,
    quinoa: Boolean,
    shellfish: Boolean,
    spicy: Boolean    
  }
})

module.exports = mongoose.model ( 'User', User )