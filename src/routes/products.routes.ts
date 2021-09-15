import { Router } from "express";
import { createProductController } from "../modules/products/useCases/createProduct";
import { listProductsController } from "../modules/products/useCases/listProducts";

const productsRoutes = Router();

productsRoutes.get("/", (req, res) => {
	return listProductsController.handle(req, res);
});

productsRoutes.get("/:id", (req, res) => {
	return res.status(200).send({
		msg: `consulta um produto com o id ${req.params.id}`,
	});
});

productsRoutes.post("/", (req, res) => {
	return createProductController.handle(req, res);
});

productsRoutes.put("/:id", (req, res) => {
	return res
		.status(200)
		.send({ msg: `atualiza um produtos com o id ${req.params.id}` });
});

productsRoutes.delete("/:id", (req, res) => {
	return res.status(204).send();
});

export { productsRoutes };
