const sprites = require('../assets/data.json')
const {
    filter
} = require('./utils.js');

const MAX_COUNT = (1 << 5) << 10

var positiveCharacters = filter(sprites, (obj) => obj.score >= 0);
var negativeCharacters = filter(sprites, (obj) => obj.score < 0);

// console.log('positiveCharacters', positiveCharacters)
// console.log('negativeCharacters', negativeCharacters)

module.exports = {
    MAX_COUNT,
    characters: sprites,
    negativeCharacters,
    positiveCharacters,
    filter,
};