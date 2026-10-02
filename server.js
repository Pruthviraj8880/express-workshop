
const express = require('express')
const productRoutes = require('./routes/productRoutes')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Product API is running',
        endpoints: [
            'GET /products',
            'GET /products/:id',
            'POST /products',
            'PUT /products/:id',
            'PATCH /products/:id',
            'DELETE /products/:id'
        ]
    })
})

app.use('/products', productRoutes)

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    })
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err)

    if (res.headersSent) {
        return next(err)
    }

    res.status(500).json({
        error: err.message || 'Internal server error'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})