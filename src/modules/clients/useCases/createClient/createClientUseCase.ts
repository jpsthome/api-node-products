import { IClientsRepository } from "../../repositories/IClientsRepository";

interface IRequest {
	clientCode: number;
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

class CreateClientUseCase {
	// D:inversão de dependências
	constructor(private clientRepository: IClientsRepository) {}

	execute({ clientCode, name, cpf, sex, email }: IRequest): void {
		const clientNameAlreadyExist = this.clientRepository.findByName(name);
		const clientCodeAlreadyExist =
			this.clientRepository.findByCode(clientCode);
		if (clientNameAlreadyExist || clientCodeAlreadyExist) {
			throw new Error(`Client ${name}#${clientCode} already exists`);
		}
		this.clientRepository.create({ clientCode, name, cpf, sex, email });
	}
}

export { CreateClientUseCase };
