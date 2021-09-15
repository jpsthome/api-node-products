import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";
import { UpdateClientController } from "./updateClientController";
import { UpdateClientUseCase } from "./updateClientUseCase";

const clientsRepository = ClientsRepository.getInstance();
const updateClientUseCase = new UpdateClientUseCase(clientsRepository);
const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientController };
