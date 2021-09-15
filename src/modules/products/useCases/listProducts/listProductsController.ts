import { Request, Response } from "express";

import { ListProductsUseCase } from "./listProductsUseCase";

class ListProductsController {
	constructor(private listProductsUseCase: ListProductsUseCase) {}

	handle(req: Request, res: Response): Response {
		const allProducts = this.listProductsUseCase.execute();
		return res.status(200).send(allProducts);
	}
}

export { ListProductsController };
