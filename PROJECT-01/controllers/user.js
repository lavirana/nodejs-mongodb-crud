const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDbusers = await User.find({});
    return res.json(allDbusers);
}

async function handlegetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "User not found"});
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {last_name: "Changed"})
    return res.json({status: "pending"});
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({status: "Sucess"});
}


module.exports = {
    handleGetAllUsers, handlegetUserById, handleUpdateUserById, handleDeleteUserById
}