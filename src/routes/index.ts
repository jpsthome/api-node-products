import { Router } from "express";

import { productsRoutes } from "./products.routes";
import { clientsRoutes } from "./clients.routes";

const router = Router();

router.use("/products", productsRoutes);
router.use("/clients", clientsRoutes);

export { router };
