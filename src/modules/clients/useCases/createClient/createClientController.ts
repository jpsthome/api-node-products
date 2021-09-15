import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientController {
	constructor(private createClientUseCase: CreateClientUseCase) {}

	handle(req: Request, res: Response) {
		const { name, cpf, sex, email } = req.body;
		this.createClientUseCase.execute({ name, cpf, sex, email });
		return res.status(201).send();
	}
}

export { CreateClientController };
