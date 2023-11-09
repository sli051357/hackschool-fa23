const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

// Add API routes here
router.get('/game', gameController.getGame);
router.post('/game', async(req, res) => {
    const game = req.body;
    const sentence = game.sentence;
    const correctCharacters = game.correctCharacters;
    const incorrectCharacters = game.incorrectCharacters;
    const wpm = game.wpm;
    const time = game.time;

    if (sentence == undefined || correctCharacters == undefined || incorrectChacters == undefined || wpm == undefined || time == undefined) {
        res.status(404).json("Invalid Input");
    }

    if (sentence.length != correctCharacters + incorrectCharacters) {
        res.status(404).json("Incorrect Character Count");
    }

    res.status(200).json(game);
});


module.exports = router;