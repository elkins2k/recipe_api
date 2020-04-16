const mongoose = require ( '../db/connection' )

const User = new mongoose.Schema ({
  email: String,
  firstName: String,
  lastName: String,
  avoidCarbs: {
      type: Boolean, 
      default: false
    },
  avoidDairy: {
      type: Boolean, 
      default: false
    },
  avoidEggs: {
      type: Boolean, 
      default: false
    },
  avoidGluten: {
      type: Boolean, 
      default: false
    },
  avoidMeat: {
      type: Boolean, 
      default: false
    },
  avoidNuts: {
      type: Boolean, 
      default: false
    },
  avoidQuinoa: {
      type: Boolean, 
      default: true
    },
  avoidShellfish: {
      type: Boolean, 
      default: false
    },
  avoidSpicy: {
      type: Boolean, 
      default: false
    }
})

module.exports = mongoose.model ( 'User', User )