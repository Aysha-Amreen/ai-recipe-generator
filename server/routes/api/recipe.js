const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const Recipe = require('../../models/Recipe');

//get list of recipes
router.get('/', (req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get recipe by id
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
});

//add new recipe
router.post('/', bodyParser.json(), (req, res) => {
    Recipe.create(req.body)
        .then(() => res.json('Recipe added!'))
        .catch(err => {
            console.error(err); // Log the full error
            res.status(400).json('Error: ' + err);
        });
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