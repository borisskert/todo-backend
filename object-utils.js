/**
 * https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
 * @param obj object to be filtered
 * @param callbackFn filter function which determines if the key gets filtered or not
 */
function filter(obj, callbackFn) {
    return Object.keys(obj)
        .filter(callbackFn)
        .reduce((filtered, key) => {
            filtered[key] = obj[key];
            return filtered;
        }, {});
}

module.exports = filter;
