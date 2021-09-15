import { ClientsRepository } from "../../repositories/implementations/ClientsRepository";

interface IRequest {
	id: string;
}
// CONTROLLER (REQUISIÇÕES DOS CLIENTS) -> USECASE (REGRAS DE NEGÓCIO) -> REPOSITORY (CAMADA DE DADOS)
class DeleteClientUseCase {
	constructor(private clientRepository: ClientsRepository) {}

	execute({ id }: IRequest): void {
		const client = this.clientRepository.findById(id);
		if (!client) {
			throw new Error("Client does not exist");
		}
		this.clientRepository.delete(id);
	}
}

export { DeleteClientUseCase };
