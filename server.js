const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyPraser = require('body-parser')
const user = require('./src/routes/user')
app.use(
  bodyPraser.urlencoded({
    extended: true
  })
)
app.use(bodyPraser.json())
app.listen(port)
console.log('Connect Succes On ' + port)
app.use('/user', user)
