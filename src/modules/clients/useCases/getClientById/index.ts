import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";
import { GetClientByIdController } from "./getClientByIdController";
import { GetClientByIdUseCase } from "./getClientByIdUseCase";

const clientsRepository = ClientsRepository.getInstance();
const getClientByIdUseCase = new GetClientByIdUseCase(clientsRepository);
const getClientByIdController = new GetClientByIdController(
	getClientByIdUseCase,
);

export { getClientByIdController };
