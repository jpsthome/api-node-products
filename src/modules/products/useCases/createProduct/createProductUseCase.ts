import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
	name: string;
	fabrication: string;
	size: number;
	value: number;
}

class CreateProductUseCase {
	// D:inversão de dependências
	constructor(private productRepository: IProductsRepository) {}

	execute({ name, fabrication, size, value }: IRequest): void {
		const productAlreadyExist = this.productRepository.findByName(name);
		if (productAlreadyExist) {
			throw new Error(`Product ${name} already exists`);
		}
		this.productRepository.create({ name, fabrication, size, value });
	}
}

export { CreateProductUseCase };
