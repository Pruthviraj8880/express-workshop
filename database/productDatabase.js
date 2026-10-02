
const fs = require('fs')
const path = require('path')

const pathToFile = path.join(__dirname, '..', 'db.json')

async function readFileWithDelay() {
    await new Promise(resolve => setTimeout(resolve, 1500))

    const data = await fs.promises.readFile(pathToFile, 'utf-8')

    return JSON.parse(data)
}

async function writeDatabase(products) {
    await fs.promises.writeFile(
        pathToFile,
        JSON.stringify(products, null, 2),
        'utf-8'
    )
}

async function getAllProducts() {
    return await readFileWithDelay()
}

async function getProductById(id) {
    const products = await readFileWithDelay()

    return products.find(
        p => String(p.id) === String(id)
    ) || null
}

async function createProduct(productData) {
    const products = await readFileWithDelay()

    const numericIds = products
        .map(p => Number(p.id))
        .filter(id => Number.isFinite(id))

    const newId = numericIds.length > 0
        ? Math.max(...numericIds) + 1
        : 1

    const newProduct = {
        ...productData,
        id: newId
    }

    products.push(newProduct)

    await writeDatabase(products)

    return newProduct
}

async function updateProduct(id, productData) {
    const products = await readFileWithDelay()

    const index = products.findIndex(
        p => String(p.id) === String(id)
    )

    if (index === -1) {
        return null
    }

    // PUT replaces the product's supplied fields.
    // The existing ID is preserved.
    const updatedProduct = {
        ...productData,
        id: products[index].id
    }

    products[index] = updatedProduct

    await writeDatabase(products)

    return updatedProduct
}

async function patchProduct(id, productData) {
    const products = await readFileWithDelay()

    const index = products.findIndex(
        p => String(p.id) === String(id)
    )

    if (index === -1) {
        return null
    }

    // PATCH changes only the supplied fields.
    const updatedProduct = {
        ...products[index],
        ...productData,
        id: products[index].id
    }

    products[index] = updatedProduct

    await writeDatabase(products)

    return updatedProduct
}

async function deleteProduct(id) {
    const products = await readFileWithDelay()

    const index = products.findIndex(
        p => String(p.id) === String(id)
    )

    if (index === -1) {
        return null
    }

    const deletedProduct = products[index]

    products.splice(index, 1)

    await writeDatabase(products)

    return deletedProduct
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}