const router = require('express').Router();

// import
const Users = require('./usersModel');

// middlewares

// routes
router.get('/', (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Users.findById(id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

router.post('/', (req, res) => {
    const data = req.body;
    Users.add(data)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const updatedUser = { ...changes, id };
    Users.update(id, changes)
        .then(user => {
            res.status(200).json({ message: "Student updated successfully", updatedUser });
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

module.exports = router;