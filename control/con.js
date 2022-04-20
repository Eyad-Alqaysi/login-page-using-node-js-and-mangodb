const req = require("express/lib/request");
const res = require("express/lib/response");
const user = require("../model/mod");

const getAll = async (req, res, next) =>{
    let User;
    try{
        User = await user.find();
    }catch (err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"NO users found ."});
    }
    return res.status(200).json({User});
}
const addUser = async (req, res, next) => {
    const {name, email, password} = req.body;
    let User
    try{
        User = new user({
            name,
            email,
            password
        });
        await User.save();
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"Can not create user"});
    }
    return res.status(200).json({User});
};
const getUserInfo = async (req, res,next) => {
    const id = req.params.id;
    let User;
    try{
        User = await user.findByNAME(id);
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"Can not find user"});
    }
    return res.status(200).json({User});
};
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let User;
    try{
        User = await user.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"---jtyy-g-jy"});
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
        await User.save();
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"Can not update user"});
    }
    return res.status(200).json({User});
};
exports.getAll= getAll;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUserInfo = getUserInfo;