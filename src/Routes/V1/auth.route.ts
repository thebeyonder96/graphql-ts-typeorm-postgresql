import { Router } from "express";
import { login } from "../../Controllers/auth.controller";

const ROUTER = Router();

ROUTER.get('/',login)

export const AUTH = ROUTER;
