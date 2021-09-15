import { Router } from "express";

import { createClientController } from "../modules/clients/useCases/createClient";
import { deleteClientController } from "../modules/clients/useCases/deleteClient";
import { getClientByIdController } from "../modules/clients/useCases/getClientById";
import { listClientsController } from "../modules/clients/useCases/listClients";
import { updateClientController } from "../modules/clients/useCases/updateClient";

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
	return updateClientController.handle(req, res);
});

clientsRoutes.delete("/:id", (req, res) => {
	return deleteClientController.handle(req, res);
});

export { clientsRoutes };
