import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientController {
	constructor(private createClientUseCase: CreateClientUseCase) {}

	handle(req: Request, res: Response) {
		const { clientCode, name, cpf, sex, email } = req.body;
		try {
			this.createClientUseCase.execute({
				clientCode,
				name,
				cpf,
				sex,
				email,
			});
			return res.status(201).send();
		} catch (err) {
			return res.status(400).send({
				message: err.message,
			});
		}
	}
}

export { CreateClientController };
