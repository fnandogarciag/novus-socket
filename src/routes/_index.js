import { Router } from "express";

import mapRouter from "./map.routes.js";

function routerApi(app) {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/map", mapRouter);
}

export default routerApi;
