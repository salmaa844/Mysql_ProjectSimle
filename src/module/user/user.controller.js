import * as services from './user.service.js'

export const GetUsers = async (req,res)=>{

    const data = await services.GetUser();
    res.status(200).json({
        message:"done all users",
        data
    })
}
export const GetUsersbyID = async (req,res)=>{
    const {id} = req.params;
    const data = await services.GetUser();
    res.status(200).json({
        message:"done users",
        data
    })
}
export const CreateUser = async (req,res)=>{
    const {name,email} = req.body;
    const data = await services.CreateUser(name,email);
    if(data>0){
    res.status(200).json({
        message:"done users",
        data
    })}
    else{
        res.status(404).json({
        message:"error data",
       
    })}
}

export const DeleteUser = async(req,res)=>{
    const {id} = req.params;
    const data = await services.DeleteUser(id);
     if(data>0){
    res.status(200).json({
        message:"done delete users",
        data})}
    else{
        res.status(404).json({
        message:"error data",
       
    })}
}