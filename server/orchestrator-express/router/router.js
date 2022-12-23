const UserController = require('../controllers/UserController')
const router = require('express').Router()

router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getUser)
router.post('/users', UserController.addUser)
router.delete('/users/:id', UserController.deleteUser)

module.exports = router