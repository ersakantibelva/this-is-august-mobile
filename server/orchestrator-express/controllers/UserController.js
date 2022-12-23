const axios = require("axios")
const baseUrl = 'http://localhost:4001'

class UserController {
  static async getUsers(req, res, next) {
    try {
      const { data: users } = await axios.get(`${baseUrl}/users`)
      
      users.map(el => {
        delete el.password
        return el
      })

      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController