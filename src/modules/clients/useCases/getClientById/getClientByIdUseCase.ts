import { Client } from "../../models/Client";
import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";

interface IRequest {
	id: string;
}
// CONTROLLER (REQUISIÇÕES DOS CLIENTS) -> USECASE (REGRAS DE NEGÓCIO) -> REPOSITORY (CAMADA DE DADOS)
class GetClientByIdUseCase {
	constructor(private clientRepository: ClientsRepository) {}

	execute({ id }: IRequest): Client {
		const client = this.clientRepository.findById(id);
		if (!client) {
			throw new Error("Client does not exist");
		}
		return client;
	}
}

export { GetClientByIdUseCase };
