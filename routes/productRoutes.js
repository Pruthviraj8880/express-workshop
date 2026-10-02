
const express = require('express')

const router = express.Router()

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
} = require('../controllers/productController')

const cacheMiddleware = require('../middleware/cacheMiddleware')
const invalidateCache = require('../middleware/invalidateCache')

// GET /products
router.get(
    '/',
    cacheMiddleware,
    getProducts
)

// GET /products/:id
router.get(
    '/:id',
    cacheMiddleware,
    getProductById
)

// POST /products
router.post(
    '/',
    invalidateCache,
    createProduct
)

// PUT /products/:id
router.put(
    '/:id',
    invalidateCache,
    updateProduct
)

// PATCH /products/:id
router.patch(
    '/:id',
    invalidateCache,
    patchProduct
)

// DELETE /products/:id
router.delete(
    '/:id',
    invalidateCache,
    deleteProduct
)

module.exports = router