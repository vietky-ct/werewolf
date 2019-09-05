const {
    filter
} = require('./utils.js');

const MAX_COUNT = (1 << 5) << 10
const sprites = [
    {
        "id": 1,
        "name": "village",
        "score": 1,
        "count": MAX_COUNT,
    },
    {
        "id": 2,
        "name": "wolf",
        "score": -6,
        "count": MAX_COUNT,
    },
    {
        "id": 3,
        "name": "seer",
        "score": 7,
        "count": 1,
    },
    {
        "id": 4,
        "name": "witch",
        "score": 6,
        "count": 1,
    },
    {
        "id": 5,
        "name": "hunter",
        "score": 4,
        "count": 1,
    },
    {
        "id": 6,
        "name": "guard",
        "score": 3,
        "count": 1,
    }
]


var positiveCharacters = filter(sprites, (obj) => obj.score >= 0);
var negativeCharacters = filter(sprites, (obj) => obj.score < 0);

// console.log('positiveCharacters', positiveCharacters)
// console.log('negativeCharacters', negativeCharacters)

module.exports = {
    MAX_COUNT,
    sprites,
    negativeCharacters,
    positiveCharacters,
    filter,
};