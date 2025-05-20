import userRouter from "./module/user/user.router.js";
import productRouter from "./module/product/product.router.js";
 export function init(app,express){

    app.use(express.json());

    app.use('/user',userRouter);
    app.use('/products',productRouter);
}