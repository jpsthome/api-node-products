import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientController {
	constructor(private createClientUseCase: CreateClientUseCase) {}

	handle(req: Request, res: Response) {
		const { name, fabrication, size, value } = req.body;
		this.createClientUseCase.execute({ name, fabrication, size, value });
		return res.status(201).send();
	}
}

export { CreateClientController };
