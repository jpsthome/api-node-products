import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";
import { DeleteClientController } from "./deleteClientController";
import { DeleteClientUseCase } from "./deleteClientUseCase";

const clientsRepository = ClientsRepository.getInstance();
const deleteClientUseCase = new DeleteClientUseCase(clientsRepository);
const deleteClientController = new DeleteClientController(deleteClientUseCase);

export { deleteClientController };
