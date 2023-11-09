const getGame = async (req, res) => {
    const game = {
        sentence: "Hello there",
        correctCharacters: 14,
        incorectCharacters: 15,
        wpm: 100,
        time: 13.33
    };

    res.status(200).json(game);
}



module.exports = { getGame };