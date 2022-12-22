class Controller {
  static async getUsers(req, res, next) {
    try {
      res.status(200).json("ok")
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller