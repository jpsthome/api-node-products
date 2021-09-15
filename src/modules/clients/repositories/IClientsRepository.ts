import { Client } from "../models/Client";

interface ICreateClientDTO {
	clientCode: number;
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

interface IUpdateClientDTO {
	clientCode: number;
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

interface IClientsRepository {
	findById(id: string): Client;
	findByName(name: string): Client;
	findByCode(clientCode: number): Client;
	list(): Client[];
	create({ clientCode, name, cpf, sex, email }: ICreateClientDTO): void;
	update(
		id: string,
		{ clientCode, name, cpf, sex, email }: IUpdateClientDTO,
	): void;
	delete(id: string): void;
}

export { ICreateClientDTO, IUpdateClientDTO, IClientsRepository };
