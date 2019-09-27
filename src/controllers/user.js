const user = require('../models/user')
const response = require('../helper/response')
module.exports = {
  getUsers: (req, res) => {
    user.getUser()
      .then((result) => {
        response.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
