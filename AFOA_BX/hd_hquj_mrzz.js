function hd_hquj_mrzz(moduleName) {
    var modulePath = require.resolve(moduleName);
    try {
        delete require.cache[modulePath];
        // remove child modules
        Object.keys(module.constructor._pathCache).forEach(function (cacheKey) {
            if (cacheKey.indexOf(modulePath) > 0) {
                delete module.constructor._pathCache[cacheKey];
            }
        });
        return true
    } catch (err) {
        return false
    }
}
module.exports = hd_hquj_mrzz