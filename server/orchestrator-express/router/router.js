const UserController = require('../controllers/UserController')
const router = require('express').Router()

router.get('/users', UserController.getUsers)

module.exports = router