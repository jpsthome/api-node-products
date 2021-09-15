import { Client } from "../../models/Client";
import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";

class ListClientsUseCase {
	constructor(private clientsRepository: ClientsRepository) {}

	execute(): Client[] {
		const clients = this.clientsRepository.list();
		return clients;
	}
}

export { ListClientsUseCase };
