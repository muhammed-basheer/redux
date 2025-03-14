import e from "express";
import { signin, signup,google,signout,adminSignIn } from "../controllers/auth_controller.js";

const router = e.Router();

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/google',google);
router.get('/signout',signout)

router.post("/adminSignIn", adminSignIn)


export default router;      