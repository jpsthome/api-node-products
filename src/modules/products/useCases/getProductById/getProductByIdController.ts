import { Request, Response } from "express";
import { GetProductByIdUseCase } from "./getProductByIdUseCase";

class GetProductByIdController {
	constructor(private getProductByIdUseCase: GetProductByIdUseCase) {}

	handle(req: Request, res: Response) {
		const { id } = req.params;
		try {
			const product = this.getProductByIdUseCase.execute({ id });
			return res.status(200).send(product);
		} catch (err) {
			return res.status(400).send({
				message: err.message,
			});
		}
	}
}

export { GetProductByIdController };
