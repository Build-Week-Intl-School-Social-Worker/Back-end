const router = require('express').Router();

// import
const Visits = require('./visitsModel');

// middlewares

// routes
router.get('/', (req, res) => {
    Visits.get()
        .then(visit => {
            res.status(200).json(visit);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Visits.findById(id)
        .then(visit => {
            res.status(200).json(visit);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

router.post('/', (req, res) => {
    const data = req.body;
    Visits.add(data)
        .then(visit => {
            res.status(201).json(visit);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
    })
})

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;
//     const updatedVisit = { ...changes, id };
//     Users.update(id, changes)
//         .then(visit => {
//             res.status(200).json({ message: "Visit updated successfully", updatedVisit });
//         })
//         .catch(err => {
//             res.status(500).json({ error: "server error", err });
//         })
// })

module.exports = router;