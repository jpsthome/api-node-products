import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";

interface IRequest {
	clientCode: number;
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

class UpdateClientUseCase {
	constructor(private clientsRepository: ClientsRepository) {}

	execute(id: string, { clientCode, name, cpf, sex, email }: IRequest): void {
		const client = this.clientsRepository.findById(id);
		if (!client) {
			throw new Error("Client does not exist");
		}
		this.clientsRepository.update(id, {
			clientCode,
			name,
			cpf,
			sex,
			email,
		});
	}
}

export { UpdateClientUseCase };
