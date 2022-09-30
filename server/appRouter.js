const Router = require('express')
const ProductController = require('./controllers/Product')
const router = new Router()

router.get('/products', ProductController.getProducts)
router.post('/products', ProductController.addProduct)
router.put('/products/:id', ProductController.editProduct)
router.delete('/products/:id', ProductController.deleteProduct)

module.exports = router