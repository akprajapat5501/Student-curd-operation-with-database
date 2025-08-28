import express from 'express'
import { create, deleteUser, getAll, getOne, Update } from '../controllers/userController.js';


const route = express.Router();

route.post("/", create);
route.get("/getAll", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id", Update)
route.delete("/delete/:id", deleteUser)


export default route