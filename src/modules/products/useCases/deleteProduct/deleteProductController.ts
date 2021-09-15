import { Request, Response } from "express";
import { DeleteProductUseCase } from "./deleteProductUseCase";

class DeleteProductController {
	constructor(private deleteProductUseCase: DeleteProductUseCase) {}

	handle(req: Request, res: Response) {
		const { id } = req.params;
		this.deleteProductUseCase.execute({ id });
		res.status(204).send();
	}
}

export { DeleteProductController };
