const router = require('express').Router();

// import
const Users = require('./usersModel');

// middlewares
const validateUserId = require('../middlewares/validateUserId');
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

router.get('/:id/students', (req, res) => {
    const { id } = req.params;
    Users.getSocWorkerStudents(id)
        .then(students => {
            console.log(students);
            res.status(200).json(students);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err });
        })
})

router.post('/:id/students', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Users.addStudentToUser(id, data)
        .then(student => {
            console.log(student);
            res.status(201).json(student);
        })
        .catch(err => {
            res.status(500).json({ error: "server error", err: err.message });
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

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  const { id } = req.user;
  const user = req.user;
  Users.remove(id)
    .then(removed => {
      res.status(200).json({ message: "User removed successfully", user });
    })
    .catch(err => {
      res.status(500).json({ message: "server error", err });
  })
});

module.exports = router;