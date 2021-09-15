import { Product } from "../../models/Product";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";

class ListProductsUseCase {
	constructor(private productsRepository: ProductsRepository) {}

	execute(): Product[] {
		const products = this.productsRepository.list();
		return products;
	}
}

export { ListProductsUseCase };
