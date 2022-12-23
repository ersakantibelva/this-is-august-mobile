const User = require('../models/User');

class Controller {
  static async getUsers(req, res, next) {
    try {
      const users = await User.findAll()

      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params
      const user = await User.findById(id)
      if(!user) throw { message: 'Data is not found' }

      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller