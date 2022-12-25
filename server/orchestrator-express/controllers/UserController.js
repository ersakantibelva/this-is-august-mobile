const axios = require("axios")
const redis = require('../config/cache')
const baseUrl = 'http://localhost:4001/users'

class UserController {
  static async getUsers(req, res, next) {
    try {
      const cacheUser = await redis.get("cacheUser")

      if(!cacheUser) {
        const { data: users } = await axios.get(`${baseUrl}`)
        
        await redis.set("cacheUser", JSON.stringify(users))
        
        res.status(200).json(users)
      } else {
        res.status(200).json(JSON.parse(cacheUser))
      }
    } catch (error) {
      next(error)
    }
  }

  static async getUser(req, res, next) {
    try {
      const { id } = req.params
      const { data: user } = await axios.get(`${baseUrl}/${id}`)
  
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  static async addUser(req, res, next) {
    try {
      const { username, email, password, role, phoneNumber, address } = req.body
      const { data } = await axios.post(`${baseUrl}`, {
        username, email, password, role, phoneNumber, address
      })

      await redis.del("cacheUser")
  
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params
      const { data } = await axios.delete(`${baseUrl}/${id}`)

      await redis.del("cacheUser")
  
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController