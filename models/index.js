const mongoose = require('mongoose');
const {Schema} = mongoose;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: {
        type: Array,
        default: []
    }
})

const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout