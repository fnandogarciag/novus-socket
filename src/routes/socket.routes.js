import { Router } from "express";
import * as authControllers from "../controllers/auth.controllers";
import { valid_email_passw_login, valid_update_pass } from "../middlewares/auth.validations";

const router = Router();

router.post("/login", valid_email_passw_login, authControllers.login);

router.put("/uptpassword/:id", valid_update_pass, authControllers.updatePassword);

export default router;
