import { Request, Response } from "express";
import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductController {
	constructor(private createProductUseCase: CreateProductUseCase) {}

	handle(req: Request, res: Response) {
		const { productCode, name, fabrication, size, value } = req.body;
		this.createProductUseCase.execute({
			productCode,
			name,
			fabrication,
			size,
			value,
		});
		return res.status(201).send();
	}
}

export { CreateProductController };
