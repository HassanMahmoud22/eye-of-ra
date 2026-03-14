import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import contentRouter from "./content";

const router: IRouter = Router();

router.use(healthRouter);
router.use(leadsRouter);
router.use(contentRouter);

export default router;
