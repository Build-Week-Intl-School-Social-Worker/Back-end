const router = require('express').Router();

// import
const Students = require('./studentsModel');

// middlewares

// routes
router.get('/', (req, res) => {
    Students.get()
        .then(students => {
            res.status(200).json(students);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Students.findById(id)
        .then(student => {
            res.status(200).json(student);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

module.exports = router;