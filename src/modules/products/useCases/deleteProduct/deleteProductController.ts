import { Request, Response } from "express";
import { DeleteProductUseCase } from "./deleteProductUseCase";

class DeleteProductController {
	constructor(private deleteProductUseCase: DeleteProductUseCase) {}

	handle(req: Request, res: Response) {
		const { id } = req.params;
		try {
			this.deleteProductUseCase.execute({ id });
			return res.status(204).send();
		} catch (err) {
			return res.status(400).send({
				message: err.message,
			});
		}
	}
}

export { DeleteProductController };
