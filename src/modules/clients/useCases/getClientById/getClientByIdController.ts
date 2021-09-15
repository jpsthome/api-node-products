import { Request, Response } from "express";
import { GetClientByIdUseCase } from "./getClientByIdUseCase";

class GetClientByIdController {
	constructor(private getClientByIdUseCase: GetClientByIdUseCase) {}

	handle(req: Request, res: Response) {
		const { id } = req.params;
		try {
			const client = this.getClientByIdUseCase.execute({ id });
			return res.status(200).send(client);
		} catch (err) {
			return res.status(400).send({
				message: err.message,
			});
		}
	}
}

export { GetClientByIdController };
