import { Router } from "express";

import { createClientController } from "../modules/clients/useCases/createClient";

const clientsRoutes = Router();

clientsRoutes.get("/", (req, res) => {
	return res.json({ msg: "consulta tods clientes" });
});

clientsRoutes.get("/:id", (req, res) => {
	return res.json({ msg: "consulta um cliente" });
});

clientsRoutes.post("/", (req, res) => {
	return createClientController.handle(req, res);
});

clientsRoutes.put("/:id", (req, res) => {
	return res.json({ msg: "atualiza um cliente" });
});

clientsRoutes.delete("/:id", (req, res) => {
	return res.json({ msg: "deleta um cliente" });
});

export { clientsRoutes };
