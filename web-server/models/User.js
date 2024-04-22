import mongoose from 'mongoose';

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

modules.export = User = mongoose.model('user', userSchema);