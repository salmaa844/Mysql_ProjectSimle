
import { Router } from "express";
import * as product from "./product.controller.js"

 const ProductRouter = Router();

ProductRouter.route("/")
.get(product.GetAllProduct)

.post(product.CreateProduct);

ProductRouter.route("/:id")
.get(product.GetbyIdProduct)
.patch(product.UpdateProduct)
.delete(product.DeleteProduct)



export default ProductRouter;