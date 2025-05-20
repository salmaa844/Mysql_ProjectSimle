import db from './../../../DB/connection.js'

export const GetProduct = async ()=>{
    const [result] = await db.execute("SELECT *FROM product");
    return result;
}

export const GetProductByID= async (id)=>{
    const [product] = await db.execute("SELECT *FROM product WHERE ID = ? ",[id]);
    return product;
}

export const CreateProduct = async(ProductName,Price)=>{
    const [result] = await db.execute("INSERT INTO product (ProductName,Price) value (?,?)",[ProductName,Price])
    return {
        ProductName,
        Price,
        id:result.insertId
    };
}

export const Update = async(id,ProductName,Price)=>{
    const [result] =await db.execute("Update product  set ProductName = ? , price=?  where id = ?" ,[id,ProductName,Price]);
    return result.affectedRows;
    
}
export const Delete =async (id)=>{
     console.log("Received ID:", id);
    const [result] = await db.execute("DELETE FROM product where ID = ?",[id]);
    return result.affectedRows;
}