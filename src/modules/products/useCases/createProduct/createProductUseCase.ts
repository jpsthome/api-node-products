import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
	productCode: number;
	name: string;
	fabrication: string;
	size: number;
	value: number;
}

class CreateProductUseCase {
	// D:inversão de dependências
	constructor(private productRepository: IProductsRepository) {}

	execute({ productCode, name, fabrication, size, value }: IRequest): void {
		const productNameAlreadyExist = this.productRepository.findByName(name);
		const productCodeAlreadyExist =
			this.productRepository.findByCode(productCode);
		if (productNameAlreadyExist || productCodeAlreadyExist) {
			throw new Error(`Product ${name}#${productCode} already exists`);
		}
		if (fabrication != "nacional" && fabrication != "importado") {
			throw new Error(`Fabrication must be "nacional" or "importado"`);
		}

		this.productRepository.create({
			productCode,
			name,
			fabrication,
			size,
			value,
		});
	}
}

export { CreateProductUseCase };
