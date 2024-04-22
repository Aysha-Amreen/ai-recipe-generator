const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const User = require('../../models/User');

//get list of recipes
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get recipe by id
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

//add new recipe
router.post('/', bodyParser.json(), (req, res) => {
    Recipe.create(req.body)
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update recipe by id
router.put('/:id', bodyParser.json(), (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete recipe by id
router.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Recipe deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;