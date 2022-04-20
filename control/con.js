const req = require("express/lib/request");
const res = require("express/lib/response");
const user = require("../model/mod");

const addUser = async (req, res, next) => {
    const {name, email, password} = req.body;
    let User
    try{
        User = new user({
            name,
            email,
            password
        });
        await user.save();
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"Can not create user"});
    }
    return res.status(200).json({User});
};
const getUserInfo = async (req, res,next) => {
    const name = req.params.name;
    let User;
    try{
        user = await User.findByNAME(name);
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"Can not find user"});
    }
    return res.status(200).json({User});
};
const deleteUser = async (req, res, next) => {
    const name = req.params.name;
    let User;
    try{
        user = await User.findByIDAndDelete(name);
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"Can not delete user"});
    }
    return res.status(200).json({User});
};
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const {name, email, password}= req.body;
    let User;
    try{
        User =  await user.findByIdAndUpdate(id,{
            name,
            email,
            password
        });
        User = await user.save();
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"Can not update user"});
    }
    return res.status(200).json({User});
};

exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUserInfo = getUserInfo;