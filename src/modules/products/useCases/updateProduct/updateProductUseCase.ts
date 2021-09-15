import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";

interface IRequest {
	productCode: number;
	name: string;
	fabrication: "nacional" | "importado";
	size: number;
	value: number;
}

class UpdateProductUseCase {
	constructor(private productsRepository: ProductsRepository) {}

	execute(
		id: string,
		{ productCode, name, fabrication, size, value }: IRequest,
	): void {
		const product = this.productsRepository.findById(id);
		if (!product) {
			throw new Error("Product does not exist");
		}
		this.productsRepository.update(id, {
			productCode,
			name,
			fabrication,
			size,
			value,
		});
	}
}

export { UpdateProductUseCase };
