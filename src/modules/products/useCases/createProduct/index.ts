import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { CreateProductController } from "./createProductController";
import { CreateProductUseCase } from "./createProductUseCase";

const productsRepository = ProductsRepository.getInstance();
const createProductUseCase = new CreateProductUseCase(productsRepository);
const createProductController = new CreateProductController(
	createProductUseCase,
);

export { createProductController };
