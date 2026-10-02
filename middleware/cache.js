
const cache = new Map()

const TTL = 60 * 1000 // 1 minute

function getCache(key) {
    const entry = cache.get(key)

    if (!entry) {
        return null
    }

    const age = Date.now() - entry.createdAt

    // Delete expired entries
    if (age >= TTL) {
        cache.delete(key)
        return null
    }

    return entry.value
}

function setCache(key, value) {
    cache.set(key, {
        value: value,
        createdAt: Date.now()
    })
}

function clearCache() {
    cache.clear()
}

module.exports = {
    getCache,
    setCache,
    clearCache,
    TTL
}