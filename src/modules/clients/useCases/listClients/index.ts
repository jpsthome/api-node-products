import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";
import { ListClientsController } from "./listClientsController";
import { ListClientsUseCase } from "./listClientsUseCase";

const clientsRepository = ClientsRepository.getInstance();
const listClientsUseCase = new ListClientsUseCase(clientsRepository);
const listClientsController = new ListClientsController(listClientsUseCase);

export { listClientsController };
