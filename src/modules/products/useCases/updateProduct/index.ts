import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { UpdateProductController } from "./updateProductController";
import { UpdateProductUseCase } from "./updateProductUseCase";

const productsRepository = ProductsRepository.getInstance();
const updateProductUseCase = new UpdateProductUseCase(productsRepository);
const updateProductController = new UpdateProductController(
	updateProductUseCase,
);

export { updateProductController };
