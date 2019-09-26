$.get({
    url: "http://localhost:3000/cards/get-all",
    success: function (data) {
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
            t.setAttribute('value', data.id);
            t.setAttribute('name', 'roleChosed');

            y.innerText = data.name;

            z.innerText = data.score;

            imgDiv.appendChild(x);
            titleDiv.appendChild(y);
            scoreDiv.appendChild(z);
            checkboxDiv.appendChild(t);
        })
    }
});

$("#btn__next").on('click', () => {
    let result = {};
    result.total_player = 0;
    result.selected_characters = [];
    var numbersOfPlayer = $('#players__input').val();
    $('input[name="roleChosed"]:checked').each(function () {
        result.selected_characters.push(this.value);
    });
    result.total_player = numbersOfPlayer;
    console.log(result.selected_characters);
    $.post('http://localhost:3000/cards/init',
        {
            'total_player': result.total_player,
            'selected_characters[]': result.selected_characters
        }, (data) => {
            console.log('My data: ', data)
        }
    );
})
