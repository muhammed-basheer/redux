import e from "express";
import { signin, signup,google,signout } from "../controllers/auth_controller.js";

const router = e.Router();

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/google',google);
router.get('/signout',signout)


export default router;      