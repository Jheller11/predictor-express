const mongoose = require('../db/connection')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
})

// userSchema.methods.generateHash = password => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
// }

// userSchema.methods.validPassword = (password, user) => {
//   return bcrypt.compareSync(password, user.password)
// }

module.exports = mongoose.model('User', userSchema)
