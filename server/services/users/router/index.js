const Controller = require('../controllers')
const router = require('express').Router()

router.get("/users", Controller.getUsers)
router.get("/users/:id", Controller.getUserById)
router.post("/users", Controller.createUser)
router.delete("/users/:id", Controller.deleteUser)

module.exports = router