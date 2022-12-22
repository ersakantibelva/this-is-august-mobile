const { User } = require('../models')
const { verifyToken } = require("../helpers/jwt")

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if(!access_token) throw { message: "Invalid token" }

    const payload = verifyToken(access_token)

    const user = await User.findByPk(payload.id)
    if(!user) throw { message: "Invalid token" }
    if(user.role != "Admin") throw { message: "Invalid token" }

    req.user = {
      id: user.id
    }

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authentication