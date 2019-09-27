const connection = require('../config/db')
module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * from user', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
