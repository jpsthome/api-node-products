import { Request, Response } from "express";

import { ListClientsUseCase } from "./listClientsUseCase";

class ListClientsController {
	constructor(private listClientsUseCase: ListClientsUseCase) {}

	handle(req: Request, res: Response): Response {
		const allClients = this.listClientsUseCase.execute();
		return res.status(200).send(allClients);
	}
}

export { ListClientsController };
