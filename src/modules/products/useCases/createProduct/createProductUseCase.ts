import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

class CreateProductUseCase {
	// D:inversão de dependências
	constructor(private productRepository: IProductsRepository) {}

	execute({ name, cpf, sex, email }: IRequest): void {
		const productAlreadyExist = this.productRepository.findByName(name);
		if (productAlreadyExist) {
			throw new Error(`Product ${name} already exists`);
		}
		this.productRepository.create({ name, cpf, sex, email });
	}
}
