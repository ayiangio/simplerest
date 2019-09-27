const express = require('express')
const router = express.Router()
const user = require('../controllers/user')

router
// see all users
  .get('/', user.getUsers)

module.exports = router
