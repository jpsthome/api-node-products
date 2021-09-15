import { Router } from "express";
import { createProductController } from "../modules/products/useCases/createProduct";
import { deleteProductController } from "../modules/products/useCases/deleteProduct";
import { listProductsController } from "../modules/products/useCases/listProducts";
import { updateProductController } from "../modules/products/useCases/updateProduct";

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
	return updateProductController.handle(req, res);
});

productsRoutes.delete("/:id", (req, res) => {
	return deleteProductController.handle(req, res);
});

export { productsRoutes };
