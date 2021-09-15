import { Client } from "../../models/Client";
import {
	ICreateClientDTO,
	IClientsRepository,
	IUpdateClientDTO,
} from "../IClientsRepository";

class ClientsRepository implements IClientsRepository {
	private clients: Client[];
	private static INSTANCE: ClientsRepository; // TODO: estudar padrão singleton

	private constructor() {
		this.clients = [];
	}

	public static getInstance(): ClientsRepository {
		if (!ClientsRepository.INSTANCE) {
			ClientsRepository.INSTANCE = new ClientsRepository();
		}
		return ClientsRepository.INSTANCE;
	}

	findById(id: string): Client {
		return this.clients.find((cli) => cli.id === id);
	}

	findByName(name: string): Client {
		return this.clients.find((cli) => cli.name === name);
	}
	findByCode(clientCode: number): Client {
		return this.clients.find((cli) => cli.clientCode === clientCode);
	}

	list(): Client[] {
		return this.clients;
	}
	// TODO: Colocar uma validação se fabrication é igual 'nacional' ou 'importado'
	create({ clientCode, name, cpf, sex, email }: ICreateClientDTO): void {
		const client = new Client();
		Object.assign(client, {
			clientCode,
			name,
			cpf,
			sex,
			email,
			createdAt: new Date(),
		});
		this.clients.push(client);
	}
	update(
		id: string,
		{ clientCode, name, cpf, sex, email }: IUpdateClientDTO,
	): void {
		// TODO: ver se isso aqui ta funcionando
		const client = this.findById(id);
		Object.assign(client, {
			clientCode,
			name,
			cpf,
			sex,
			email,
			updatedAt: new Date(),
		});
	}
	delete(id: string): void {
		this.clients = this.clients.filter((client) => client.id !== id);
	}
}

export { ClientsRepository };
