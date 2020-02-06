const router = require('express').Router();

// import
const Students = require('./studentsModel');

// middlewares
const validateStudents = require('../middlewares/validateStudents');

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

// router.get('/:id/all', (req, res) => {
//     const { id } = req.params;
//     Students.getSocWorkerStudents(id)
//         .then(students => {
//             if (students) {
//                 res.status(200).json(students);
//             } else {
//                 res.status(200).json({ message: "This user does not have any students" });
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ error: "server error", err });
//         })
// })

router.post('/', validateStudents, (req, res) => {
    const data = req.body;
    Students.add(data)
        .then(student => {
            res.status(201).json(student);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const updatedStudent = { ...changes, id };
    Students.update(id, changes)
        .then(student => {
            res.status(200).json({ message: "Student updated successfully", updatedStudent });
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

module.exports = router;