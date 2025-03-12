import e from "express";
import { test,updateUser } from "../controllers/user_controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = e.Router();

router.get('/',test);
router.post('/update/:id',verifyToken, updateUser)

export default router