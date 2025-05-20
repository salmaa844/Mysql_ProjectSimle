

import * as data from './product.data.js';

export async function GetProduct(){
    const products = await data.GetProduct();
    return products;
}
export async function GetByID(id){
    const idproduct = await data.GetProductByID(id);
    return idproduct;
}
export async function CreateProduct(ProductName,Price){
    const row = await data.CreateProduct(ProductName,Price);
    return row;
}
export async function UpdateProduct(id,ProductName,Price){
    const updaterow = await data.Update(id,ProductName,Price);
    return updaterow;
}
export async function DeleteProduct (id){
    const deleterow = await data.Delete(id);
    return deleterow;
}