
const { clearCache } = require('./cache')

function invalidateCache(req, res, next) {
    res.on('finish', () => {
        // Invalidate only after a successful response
        if (res.statusCode >= 200 && res.statusCode < 300) {
            clearCache()

            console.log(
                `Cache invalidated after successful ${req.method} request`
            )
        }
    })

    next()
}

module.exports = invalidateCache