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
		if (productNameAlreadyExist) {
			throw new Error(`Product ${name} already exists`);
		}
		if (productCodeAlreadyExist) {
			throw new Error(`Product ${productCode} already exists`);
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
