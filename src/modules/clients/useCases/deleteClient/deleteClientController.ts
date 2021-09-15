import { Request, Response } from "express";
import { DeleteClientUseCase } from "./deleteClientUseCase";

class DeleteClientController {
	constructor(private deleteClientUseCase: DeleteClientUseCase) {}

	handle(req: Request, res: Response) {
		const { id } = req.params;
		try {
			this.deleteClientUseCase.execute({ id });
			return res.status(204).send();
		} catch (err) {
			return res.status(400).send({
				message: err.message,
			});
		}
	}
}

export { DeleteClientController };
