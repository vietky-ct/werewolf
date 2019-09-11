const {
    characters
} = require('./data.js');

const {
    filter,
    sum
} = require('./utils.js');

const N_PATTERNS_TO_FIND = 5;

const ACCEPTABLE_SCORE_GAP = 3;
// const POSITIVE_CHARACTERS = filter(characters, (s) => s.score > 0);
// const AVG_POSITIVE_SCORE = sum(POSITIVE_CHARACTERS, (s) => s.score) / POSITIVE_CHARACTERS.length;
// console.log('POSITIVE_CHARACTERS', POSITIVE_CHARACTERS, POSITIVE_CHARACTERS.length)
// console.log('AVG_POSITIVE_SCORE', AVG_POSITIVE_SCORE)

function calculate(allPatterns, currentRoles, currentScore, negativeCharacters, positiveCharacters, totalPlayer) {
    if (allPatterns.length > N_PATTERNS_TO_FIND) {
        return
    }
    // if (Math.abs(currentScore) > (totalPlayer - currentRoles.length) * AVG_POSITIVE_SCORE) {
    //     return;
    // }

    if (currentRoles.length >= totalPlayer) {
        var totalSum = sum(currentRoles, (r) => r.score);
        if (Math.abs(totalSum) <= ACCEPTABLE_SCORE_GAP) {
            // console.log('totalSum', totalSum)
            allPatterns.push(currentRoles.slice());
        }
        return
    }

    // console.log('currentRoles', currentRoles.length);
    // console.log('currentRoles', currentRoles.length, currentScore, totalPlayer)

    // pick negativeCharacters
    for (var i in negativeCharacters) {
        var r = negativeCharacters[i];
        // console.log('negativeCharacters r', r)
        if (r.count < 1) {
            continue;
        }
        r.count -= 1;
        currentRoles.push(r);
        calculate(allPatterns, currentRoles, currentScore + r.score, negativeCharacters, positiveCharacters, totalPlayer);
        r.count += 1;
        currentRoles.pop();
    }

    // pick positiveCharacters
    for (var i in positiveCharacters) {
        var r = positiveCharacters[i];
        // console.log('positiveCharacters r', r)
        if (r.count < 1) {
            continue;
        }
        currentRoles.push(r);
        r.count -= 1;
        calculate(allPatterns, currentRoles, currentScore + r.score, negativeCharacters, positiveCharacters, totalPlayer);
        r.count += 1;
        currentRoles.pop();
    }
}

function generate(allPatterns, currentRoles, availableRoles, totalPlayer) {
    var negativeCharacters = filter(availableRoles, (v) => v.score < 0);
    var positiveCharacters = filter(availableRoles, (v) => v.score >= 0);
    // console.log('availableRoles', availableRoles);
    // console.log('positiveCharacters', positiveCharacters);
    // console.log('negativeCharacters', negativeCharacters);
    var currentScore = sum(availableRoles, (v) => v.score);
    calculate(allPatterns, currentRoles, currentScore, negativeCharacters, positiveCharacters, totalPlayer);
}

function getAvailableRoles(givenRoleIdList) {
    var roles = []
    for (var i = 0; i < characters.length; i++) {
        var role = characters[i];
        var roleObj = Object.assign({}, role, {
            count: role.count,
        });

        var idx = givenRoleIdList.indexOf(role.id);
        if (idx > -1) {
            roleObj.count -= 1;
        }
        if (roleObj.count > 0) {
            roles.push(roleObj);
        }
    }
    roles.sort((a, b) => {
        return a.count - b.count;
    })
    return roles;
}

function initGame(totalPlayer, givenRoleIdList) {
    console.log('total', totalPlayer, givenRoleIdList);
    var allPatterns = [];
    var givenRoleList = filter(characters, (s) => givenRoleIdList.indexOf(s.id) > -1);
    var availableRoles = getAvailableRoles(givenRoleIdList);
    generate(allPatterns, givenRoleList, availableRoles, totalPlayer);
    return allPatterns;
}

// initGame(10, [5, 3]);

// console.log('allPatterns', allPatterns)

module.exports = {
    initGame,
}