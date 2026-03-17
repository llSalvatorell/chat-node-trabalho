// controllers/authController.js

const { createUser, findUser } = require("../models/userModel");
const emailQueue = require("../queue/emailQueue");

exports.register = (req, res) => {

    const {name, email, password} = req.body;

    createUser({name,email,password});

    emailQueue.add(email);

    res.send("Usuário cadastrado!");
};

exports.login = (req,res) => {

    const {email,password} = req.body;

    const user = findUser(email);

    if(!user || user.password !== password){
        return res.send("Login inválido");
    }

    res.send("Login realizado!");
};