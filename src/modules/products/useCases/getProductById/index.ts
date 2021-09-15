import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { GetProductByIdController } from "./getProductByIdController";
import { GetProductByIdUseCase } from "./getProductByIdUseCase";

const productsRepository = ProductsRepository.getInstance();
const getProductByIdUseCase = new GetProductByIdUseCase(productsRepository);
const getProductByIdController = new GetProductByIdController(
	getProductByIdUseCase,
);

export { getProductByIdController };
