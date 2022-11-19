import { Router } from 'express';

import {
  getAllUserController,
  getOneUserController,
  getUserWithBasketController,
  addNewUserController,
  updateUserController,
  deleteUserController,
  loginController,
  logoutController,
} from '../../controllers';

const userRouter = Router();

userRouter.route('/user').get(getAllUserController);

userRouter.route('/user/:email').get(getOneUserController);

userRouter.route('/user/:email/product').get(getUserWithBasketController);

userRouter.route('/user').post(addNewUserController);

userRouter.route('/user/:email').patch(updateUserController);

userRouter.route('/user/:email').delete(deleteUserController);

userRouter.route('/user/login').post(loginController);

userRouter.route('/user/logout').post(logoutController);

export default userRouter;
