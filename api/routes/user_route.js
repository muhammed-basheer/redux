import e from "express";
import { test } from "../controllers/user_controller.js";

const router = e.Router();

router.get('/',test)

export default router