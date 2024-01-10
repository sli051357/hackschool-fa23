import mongoose from 'mongoose';
const{ Schema } = mongoose; 

const gameSchema = new Schema({
    sentence: {type: String},
    correctCharacters: {type: String}, 
    incorrectCharacters: {type: String}, 
    wpm: {type: Number},
    time: {type: Number}
});


const GameStats = mongoose.model('GameStats', GameSchema);

mondule.exports = {GameStats}