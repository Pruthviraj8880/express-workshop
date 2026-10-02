
const productService = require('../services/productService')

async function getProducts(req, res, next) {
    try {
        const products = await productService.getProducts()

        return res.json(products)
    } catch (err) {
        next(err)
    }
}

async function getProductById(req, res, next) {
    try {
        const product = await productService.getProductById(
            req.params.id
        )

        if (!product) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }

        return res.json(product)
    } catch (err) {
        next(err)
    }
}

async function createProduct(req, res, next) {
    try {
        const product = await productService.createProduct(
            req.body
        )

        return res.status(201).json(product)
    } catch (err) {
        next(err)
    }
}

async function updateProduct(req, res, next) {
    try {
        const product = await productService.updateProduct(
            req.params.id,
            req.body
        )

        if (!product) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }

        return res.json(product)
    } catch (err) {
        next(err)
    }
}

async function patchProduct(req, res, next) {
    try {
        const product = await productService.patchProduct(
            req.params.id,
            req.body
        )

        if (!product) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }

        return res.json(product)
    } catch (err) {
        next(err)
    }
}

async function deleteProduct(req, res, next) {
    try {
        const product = await productService.deleteProduct(
            req.params.id
        )

        if (!product) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }

        return res.json({
            message: 'Product deleted successfully',
            product
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}