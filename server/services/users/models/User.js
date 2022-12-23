const { ObjectId } = require('mongodb')
const { getDb } = require('../config/mongoConnect')

class User {
  static getCollection() {
    const collection = getDb().collection("users")
    return collection
  }

  static async findAll() {
    try {
      const collection = this.getCollection()
      const users = await collection.find().toArray()

      return users
    } catch (error) {
      throw error
    }
  }

  static async findById(id) {
    try {
      const collection = this.getCollection()
      const user = await collection.findOne({
        _id: ObjectId(id)
      })

      return user
    } catch (error) {
      throw error
    }
  }
}

module.exports = User