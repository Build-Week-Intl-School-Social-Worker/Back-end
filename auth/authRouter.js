const router = require('express').Router();
const bcrypt = require('bcryptjs');

// user model
const Users = require('../users/usersModel');

// routes
router.post('/register', (req, res) => {
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    
})