
const {
    getCache,
    setCache
} = require('./cache')

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl

    const cachedValue = getCache(key)

    // Cache HIT: return the cached response
    if (cachedValue !== null) {
        res.set('X-Cache', 'HIT')

        return res.json(cachedValue)
    }

    // Cache MISS: continue to controller
    res.set('X-Cache', 'MISS')

    const originalJson = res.json.bind(res)

    res.json = function (data) {
        // Cache only successful responses
        if (res.statusCode >= 200 && res.statusCode < 300) {
            setCache(key, data)
        }

        return originalJson(data)
    }

    next()
}

module.exports = cacheMiddleware