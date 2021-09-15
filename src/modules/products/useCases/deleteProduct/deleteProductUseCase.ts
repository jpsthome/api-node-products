import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";

interface IRequest {
	id: string;
}
// CONTROLLER (REQUISIÇÕES DOS CLIENTS) -> USECASE (REGRAS DE NEGÓCIO) -> REPOSITORY (CAMADA DE DADOS)
class DeleteProductUseCase {
	constructor(private productRepository: ProductsRepository) {}

	execute({ id }: IRequest): void {
		const product = this.productRepository.findById(id);
		if (!product) {
			throw new Error("Product does not exist");
		}
		this.productRepository.delete(id);
	}
}

export { DeleteProductUseCase };
