import { Response, Request } from "express";
import { UpdateClientUseCase } from "./updateClientUseCase";

class UpdateClientController {
	constructor(private updateClientUseCase: UpdateClientUseCase) {}

	handle(req: Request, res: Response) {
		const { id } = req.params;
		const { clientCode, name, cpf, sex, email } = req.body;
		try {
			this.updateClientUseCase.execute(id, {
				clientCode,
				name,
				cpf,
				sex,
				email,
			});
			return res.status(200).send();
		} catch (err) {
			return res.status(400).send({
				message: err.message,
			});
		}
	}
}

export { UpdateClientController };
