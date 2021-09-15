import { IClientsRepository } from "../../repositories/IClientsRepository";

interface IRequest {
	name: string;
	fabrication: string;
	size: number;
	value: number;
}

class CreateClientUseCase {
	// D:inversão de dependências
	constructor(private clientRepository: IClientsRepository) {}

	execute({ name, fabrication, size, value }: IRequest): void {
		const clientAlreadyExist = this.clientRepository.findByName(name);
		if (clientAlreadyExist) {
			throw new Error(`Client ${name} already exists`);
		}
		this.clientRepository.create({ name, fabrication, size, value });
	}
}

export { CreateClientUseCase };
