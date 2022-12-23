const { hashPass } = require('../helpers/bcrypt');
const User = require('../models/User');

class Controller {
  static async getUsers(req, res, next) {
    try {
      const users = await User.findAll()

      users.map(el => {
        delete el.password
        return el
      })

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

      delete user.password

      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  static async createUser(req, res, next) {
    try {
      let { username, email, password, role, phoneNumber, address } = req.body

      if(!email) throw { message: 'Email is required' }
      const user = await User.findByEmail(email)
      if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) throw { message: "Invalid email format" }
      if(user) throw { message: 'Email must be unique' }

      if(!password) throw { message: 'Password is required' }
      if(password.length < 5) throw { message: 'Password must have minimum of 5 characters' }

      password = hashPass(password)

      const data = { email, password }

      username && (data.username = username)
      role ? data.role = role : data.role = "Admin"
      phoneNumber && (data.phoneNumber = phoneNumber)
      address && (data.address = address)

      const result = await User.create(data)
      res.status(201).json(`User has been added by id ${result.insertedId}`)
    } catch (error) {
      next(error)
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params
      const result = await User.destroy(id)
      if(!result.deletedCount) throw { message: 'Data is not found' }

      res.status(200).json("User has been deleted")
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller