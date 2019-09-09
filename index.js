const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const {
    characters,
    initGame,
} = require('./handlers');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
}));

app.post('/cards/init', (req, res) => {
    console.log('req', req.body, req.params)

    let totalPlayer = req.body.total_player;
    let selectedCharacters = req.body.selected_characters;
    let patterns = initGame(totalPlayer, selectedCharacters);

    res.status(200)
        .json(patterns).end()
})

app.get('/cards/get-all', (req, res) => {
    res.json(characters)
        .end()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})