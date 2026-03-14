import { Router, type IRouter } from "express";
import { GetStatsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/content/stats", (_req, res) => {
  const data = GetStatsResponse.parse({
    yearsExperience: 25,
    countriesServed: 15,
    factoryPartners: 50,
    projectsCompleted: 200,
  });
  res.json(data);
});

export default router;
