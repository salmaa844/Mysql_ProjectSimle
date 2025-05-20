
import * as data from './user.data.js'

export async function GetUser(){
    const users = await data.GetAllUser();
    return users;
}

export async function GetUserbyID(id){
    const users = await data.GetUserbyID(id);
    return users;
}
export async function CreateUser(name,email){
    
    const users = await data.CreateUser(name,email);
    return users;
}

export async function DeleteUser(id){
    const user = await data.DeleteUser(id);
    return user
}