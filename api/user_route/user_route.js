import e from "express";
import { test } from "../user_controller/user_controller.js";

const router = e.Router();

router.get('/',test)

export default router