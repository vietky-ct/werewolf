const data = require('./data.json');

function loadData() {
    let imgDiv = document.querySelector(".cards__image");
    let titleDiv = document.querySelector(".cards__title");
    let scoreDiv = document.querySelector(".cards__point");
    let checkboxDiv = document.querySelector(".cards__checkbox");

    data.forEach((data) => {
        let x = document.createElement('IMG');
        let y = document.createElement('P');
        let z = document.createElement('P');
        let t = document.createElement('INPUT');

        x.setAttribute('src', data.src);
        x.setAttribute('class', 'role');
        t.setAttribute('type', 'checkbox');
        
        y.innerText = data.name;

        z.innerText = data.score;

        imgDiv.appendChild(x);
        titleDiv.appendChild(y);
        scoreDiv.appendChild(z);
        checkboxDiv.appendChild(t);
    })
}

loadData()