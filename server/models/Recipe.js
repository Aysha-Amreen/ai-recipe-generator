const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = Recipe = mongoose.model('recipe', recipeSchema);
