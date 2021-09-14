import { Request, Response } from "express";
import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductController {
	constructor(private createProductUseCase: CreateProductUseCase) {}

	handle(req: Request, res: Response) {
		const { name, cpf, sex, email } = req.body;
		this.createProductUseCase.execute({ name, cpf, sex, email });
		return res.status(201).send();
	}
}

export { CreateProductController };
