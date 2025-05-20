

import * as services from './product.service.js'

export const GetAllProduct = async(req,res)=>{
    const products = await services.GetProduct();
    res.status(200).json({
        message:"done all product",
        products
    })
}
export const GetbyIdProduct = async (req,res)=>{
    const {id} = req.params;
    const productid = await services.GetByID(id);
    res.status(200).json({
        message:"done get product with id",
        productid

    })
}
export const CreateProduct = async (req,res)=>{
    const {ProductName,Price} = req.body;
    const newRow = await services.CreateProduct(ProductName,Price);
    res.status(201).json({
        mes:"add successful",
        newRow
    })
}
export const UpdateProduct = async (req,res)=>{
    const {ProductName,Price} = req.body;
    const {id} = req.params;
    
    const updaterow = await services.UpdateProduct(id,ProductName,Price)
   
    if(updaterow > 0 ){
       return res.status(200).json({
        mes:"update  successful",
        updaterow
    })
    }else{
        return res.status(404).json({
        mes:" not update  successful",
       
    })
    }
    
}
export const DeleteProduct = async (req, res) => {
    const { id } = req.params; 

    const deleteproduct = await services.DeleteProduct(id);

    if (deleteproduct > 0) {
        res.status(200).json({
            message: "delete successful product"
        });
    } else {
        res.status(404).json({
            message: "error data"
        });
    }
};