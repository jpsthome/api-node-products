import { Router } from "express";

const clientsRoutes = Router();

clientsRoutes.get("/", (req, res) => {
	return res.json({ msg: "consulta tods clientes" });
});

clientsRoutes.get("/:id", (req, res) => {
	return res.json({ msg: "consulta um cliente" });
});

clientsRoutes.post("/", (req, res) => {
	return res.json({ msg: "adiciona um cliente" });
});

clientsRoutes.put("/:id", (req, res) => {
	return res.json({ msg: "atualiza um cliente" });
});

clientsRoutes.delete("/:id", (req, res) => {
	return res.json({ msg: "deleta um cliente" });
});

export { clientsRoutes };
