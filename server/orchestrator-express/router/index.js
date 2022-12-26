const ProductController = require('../controllers/ProductController')
const UserController = require('../controllers/UserController')
const router = require('express').Router()

router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getUser)
router.post('/users', UserController.addUser)
router.delete('/users/:id', UserController.deleteUser)

router.get('/products', ProductController.getProducts)
router.post('/products', ProductController.addProduct)
router.get('/products/:productId', ProductController.getProduct)
router.put('/products/:productId', ProductController.editProduct)
router.delete('/products/:productId', ProductController.deleteProduct)

module.exports = router