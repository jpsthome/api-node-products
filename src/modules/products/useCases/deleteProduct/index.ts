import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { DeleteProductController } from "./deleteProductController";
import { DeleteProductUseCase } from "./deleteProductUseCase";

const productsRepository = ProductsRepository.getInstance();
const deleteProductUseCase = new DeleteProductUseCase(productsRepository);
const deleteProductController = new DeleteProductController(
	deleteProductUseCase,
);

export { deleteProductController };
