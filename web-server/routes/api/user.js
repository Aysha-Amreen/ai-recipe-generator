const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const User = require('../../models/User');

//get list of users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get user by id
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

//add new user
router.post('/', bodyParser.json(), (req, res) => {
    User.create(req.body)
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update user by id
router.put('/:id', bodyParser.json(), (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete user by id
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;