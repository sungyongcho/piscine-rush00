const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginPost = (req, res) => {
    
}

const singupPost = (req, res) => {
    const info = req.body;

    const hashPassword = bcrypt.hashSync(info.password);
    
}