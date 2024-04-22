const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    recipesList: {
        type: Array,
        default: []
    }
});

module.exports = User = mongoose.model('user', userSchema);