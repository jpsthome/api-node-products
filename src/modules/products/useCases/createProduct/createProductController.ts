import { Request, Response } from "express";
import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductController {
	constructor(private createProductUseCase: CreateProductUseCase) {}

	handle(req: Request, res: Response) {
		const { productCode, name, fabrication, size, value } = req.body;
		try {
			this.createProductUseCase.execute({
				productCode,
				name,
				fabrication,
				size,
				value,
			});
			return res.status(201).send();
		} catch (err) {
			return res.status(400).send({
				message: err.message,
			});
		}
	}
}

export { CreateProductController };
