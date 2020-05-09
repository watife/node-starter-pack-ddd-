import { Router } from "express";

/**
 * Dependencies {controllers}
 */
import { postCompany, findAllCompanies } from '../controllers'


const router = Router();

router.post("/", postCompany);
router.get("/", findAllCompanies);

export default router;