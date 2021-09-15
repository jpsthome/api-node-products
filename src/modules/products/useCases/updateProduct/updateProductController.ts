import { Response, Request } from "express";
import { UpdateProductUseCase } from "./updateProductUseCase";

class UpdateProductController {
	constructor(private updateProductUseCase: UpdateProductUseCase) {}

	handle(req: Request, res: Response) {
		const { id } = req.params;
		const { productCode, name, fabrication, size, value } = req.body;
		try {
			this.updateProductUseCase.execute(id, {
				productCode,
				name,
				fabrication,
				size,
				value,
			});
			return res.status(200).send();
		} catch (err) {
			return res.status(400).send({
				message: err.message,
			});
		}
	}
}

export { UpdateProductController };
