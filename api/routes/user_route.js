import e from "express";
import { test,updateUser,deleteUser } from "../controllers/user_controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = e.Router();

router.get('/',test);
router.post('/update/:id',verifyToken, updateUser)
router.delete('/delete/:id',verifyToken, deleteUser)


export default router