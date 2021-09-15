import { Router } from "express";

import { createClientController } from "../modules/clients/useCases/createClient";
import { getClientByIdController } from "../modules/clients/useCases/getClientById";
import { listClientsController } from "../modules/clients/useCases/listClients";

const clientsRoutes = Router();

clientsRoutes.get("/", (req, res) => {
	return listClientsController.handle(req, res);
});

clientsRoutes.get("/:id", (req, res) => {
	return getClientByIdController.handle(req, res);
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
