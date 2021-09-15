import { IClientsRepository } from "../../repositories/IClientsRepository";

interface IRequest {
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

class CreateClientUseCase {
	// D:inversão de dependências
	constructor(private clientRepository: IClientsRepository) {}

	execute({ name, cpf, sex, email }: IRequest): void {
		const clientAlreadyExist = this.clientRepository.findByName(name);
		if (clientAlreadyExist) {
			throw new Error(`Client ${name} already exists`);
		}
		this.clientRepository.create({ name, cpf, sex, email });
	}
}

export { CreateClientUseCase };
