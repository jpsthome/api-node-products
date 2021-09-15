import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";
import { CreateClientController } from "./createClientController";
import { CreateClientUseCase } from "./createClientUseCase";

const productsRepository = ClientsRepository.getInstance();
const createClientUseCase = new CreateClientUseCase(productsRepository);
const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };
