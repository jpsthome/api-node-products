import { Product } from "../../models/Product";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";

interface IRequest {
	id: string;
}
// CONTROLLER (REQUISIÇÕES DOS CLIENTS) -> USECASE (REGRAS DE NEGÓCIO) -> REPOSITORY (CAMADA DE DADOS)
class GetProductByIdUseCase {
	constructor(private productRepository: ProductsRepository) {}

	execute({ id }: IRequest): Product {
		const product = this.productRepository.findById(id);
		if (!product) {
			throw new Error("Product does not exist");
		}
		return product;
	}
}

export { GetProductByIdUseCase };
