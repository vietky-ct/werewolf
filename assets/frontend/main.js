const data = [
    {
        "id": 1,
        "name": "villager",
        "src": "/images/apprentice-seer.png",
        "score": 1,
        "count": 1
    },
    {
        "id": 2,
        "name": "seer",
        "src": "/images/seer.png",
        "score": 7,
        "count": 1
    },
    {
        "id": 3,
        "name": "witch",
        "src": "/images/witch.png",
        "score": 4,
        "count": 1
    },
    {
        "id": 4,
        "name": "hunter",
        "src": "/images/hunter.png",
        "score": 3,
        "count": 1
    },
    {
        "id": 5,
        "name": "wolf-cub",
        "src": "/images/wolf-cub.png",
        "score": -8,
        "count": 1
    },
    {
        "id": 6,
        "name": "sorceress",
        "src": "/images/sorceress.png",
        "score": -3,
        "count": 1
    },
    {
        "id": 7,
        "name": "bodyguard",
        "src": "/images/bodyguard.png",
        "score": 3,
        "count": 1
    },
    {
        "id": 8,
        "name": "spellcaster",
        "src": "/images/spellcaster.png",
        "score": 1,
        "count": 1
    },
    {
        "id": 9,
        "name": "village-idiot",
        "src": "/images/village-idiot.png",
        "score": 2,
        "count": 1
    },
    {
        "id": 10,
        "name": "mason",
        "src": "/images/mason.png",
        "score": 2,
        "count": 1
    },
    {
        "id": 11,
        "name": "werewolf",
        "src": "/images/werewolf.png",
        "score": -6,
        "count": 1
    },
    {
        "id": 12,
        "name": "apprentice-seer",
        "src": "/images/apprentice-seer.png",
        "score": 4,
        "count": 1
    },
    {
        "id": 13,
        "name": "aura-seer",
        "src": "/images/aura-seer.png",
        "score": 3,
        "count": 1
    },
    {
        "id": 14,
        "name": "cult-leader",
        "src": "/images/cult-leader.png",
        "score": 1,
        "count": 1
    },
    {
        "id": 15,
        "name": "cupid",
        "src": "/images/cupid.png",
        "score": -3,
        "count": 1
    },
    {
        "id": 16,
        "name": "diseased",
        "src": "/images/diseased.png",
        "score": 3,
        "count": 1
    },
    {
        "id": 17,
        "name": "doppelganger",
        "src": "/images/doppelganger.png",
        "score": -2,
        "count": 1
    },
    {
        "id": 18,
        "name": "drunk",
        "src": "/images/drunk.png",
        "score": 4,
        "count": 1
    },
    {
        "id": 19,
        "name": "ghost",
        "src": "/images/ghost.png",
        "score": 2,
        "count": 1
    },
    {
        "id": 20,
        "name": "hoodlum",
        "src": "/images/hoodlum.png",
        "score": 0,
        "count": 1
    },
    {
        "id": 21,
        "name": "lone-wolf",
        "src": "/images/lone-wolf.png",
        "score": -5,
        "count": 1
    },
    {
        "id": 22,
        "name": "lycan",
        "src": "/images/lycan.png",
        "score": -1,
        "count": 1
    },
    {
        "id": 23,
        "name": "mayor",
        "src": "/images/mayor.png",
        "score": 2,
        "count": 1
    },
    {
        "id": 24,
        "name": "minion",
        "src": "/images/minion.png",
        "score": -6,
        "count": 1
    },
    {
        "id": 25,
        "name": "moderatoer",
        "src": "/images/moderatoer.png",
        "score": 0,
        "count": 1
    },
    {
        "id": 26,
        "name": "old-hag",
        "src": "/images/old-hag.png",
        "score": 1,
        "count": 1
    },
    {
        "id": 27,
        "name": "pi",
        "src": "/images/pi.png",
        "score": 3,
        "count": 1
    },
    {
        "id": 28,
        "name": "pacifist",
        "src": "/images/pacifist.png",
        "score": -1,
        "count": 1
    },
    {
        "id": 29,
        "name": "priest",
        "src": "/images/priest.png",
        "score": 3,
        "count": 1
    },
    {
        "id": 30,
        "name": "prince",
        "src": "/images/prince.png",
        "score": 3,
        "count": 1
    },
    {
        "id": 31,
        "name": "tanner",
        "src": "/images/tanner.png",
        "score": -2,
        "count": 1
    },
    {
        "id": 32,
        "name": "troublemaker",
        "src": "/images/troublemaker.png",
        "score": -3,
        "count": 1
    },
    {
        "id": 33,
        "name": "vampire",
        "src": "/images/vampire.png",
        "score": -7,
        "count": 1
    },
    {
        "id": 34,
        "name": "tough-guy",
        "src": "/images/tough-guy.png",
        "score": 3,
        "count": 1
    },
    {
        "id": 35,
        "name": "blank",
        "src": "/images/blank.png",
        "score": 0,
        "count": 1
    },
    {
        "id": 36,
        "name": "cursed",
        "src": "/images/cursed.png",
        "score": -3,
        "count": 1
    }
];

function loadData() {
    let imgDiv = document.querySelector(".cards__image");
    let titleDiv = document.querySelector(".cards__title");
    let scoreDiv = document.querySelector(".cards__point");
    let checkboxDiv = document

    data.forEach((data) => {
        let x = document.createElement('IMG');
        let y = document.createElement('P');
        let z = document.createElement('P');

        x.setAttribute('src', data.src);
        x.setAttribute('class', 'role');
        
        y.innerText = data.name;

        z.innerText = data.score;

        imgDiv.appendChild(x);
        titleDiv.appendChild(y);
        scoreDiv.appendChild(z);
    })
}

loadData()