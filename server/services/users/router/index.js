const Controller = require('../controllers')
const router = require('express').Router()

router.get("/users", Controller.getUsers)
router.get("/users/:id", Controller.getUserById)
router.post("/users/:id", Controller.getUserById)
router.delete("/users/:id", Controller.getUserById)

module.exports = router