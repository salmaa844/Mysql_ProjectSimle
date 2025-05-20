import db from './../../../DB/connection.js'

export const GetAllUser = async ()=>{
    const [result] = await db.execute("SELECT * FROM  user");
    return result;
}
export const GetByIdUser = async(id)=>{
    const [result] = await db.execute("SELECT * FROM  user WHERE id=?", [id]);
    return result
}
export const CreateUser = async (name,email)=>{
    const [result] = await db.execute("INSERT user (name,email) value (?,?)" ,[name,email]);
    return result.affectedRows;
}
export const DeleteUser = async (id)=>{
    const [result] = await db.execute("DELETE From user WHERE id=?", [id]);
    return result.affectedRows
}