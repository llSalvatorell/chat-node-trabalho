// models/userModel.js
const users = [];

function createUser(user){
    users.push(user);
}

function findUser(email){
    return users.find(u => u.email === email);
}

module.exports = { createUser, findUser };