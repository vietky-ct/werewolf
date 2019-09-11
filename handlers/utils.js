
function filter(arr, cb) {
    var result = []
    for (var i in arr) {
        if (cb(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

function sum(arr, cb) {
    var result = 0;
    for (var i in arr) {
        result += cb(arr[i]);
    }
    return result;
}

module.exports = {
    filter,
    sum,
}