const router = require('express').Router();

const Roles = require('./rolesModel');

router.get('/', (req, res) => {
    Roles.get()
        .then(roles => {
            res.status(200).json(roles)
        })
        .catch(err => {
            res.status(500).json({error: "server error", err})
    })
})

router.post('/', (req, res) => {
    const roles = req.body;

    Roles.add(roles)
        .then(role => {
            res.status(201).json(role);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

module.exports = router;