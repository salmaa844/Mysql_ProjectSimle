import { Router } from "express";
import * as Controller from './user.controller.js';


const userRouter = Router();

userRouter.route('/')

.get(Controller.GetUsers)
.post(Controller.CreateUser);

userRouter.route('/:id')
.get(Controller.GetUsersbyID)
.delete(Controller.DeleteUser);


export default userRouter;