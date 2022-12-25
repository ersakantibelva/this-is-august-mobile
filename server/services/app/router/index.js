const Controller = require('../controllers')
// const authentication = require('../middlewares/authentication')
const router = require('express').Router()

// router.post('/login', Controller.login)
router.get('/pub/products', Controller.showProductsPub)
router.get('/pub/products/:slug', Controller.showProductBySlug)
router.get('/pub/categories/:categoryName/products', Controller.showProductByCategoryPub)

// router.use(authentication)

// router.post('/register', Controller.register)

router.get('/products', Controller.showProducts)
router.post('/products', Controller.addProduct)
router.get('/products/:productId', Controller.showProduct)
router.put('/products/:productId', Controller.editProduct)
router.delete('/products/:productId', Controller.deleteProduct)

router.get('/categories', Controller.showCategories)
router.post('/categories', Controller.addCategory)
router.get('/categories/:categoryId', Controller.showCategory)
router.put('/categories/:categoryId', Controller.editCategory)
router.delete('/categories/:categoryId', Controller.deleteCategory)


module.exports = router