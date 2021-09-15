import { Client } from "../models/Client";

interface ICreateClientDTO {
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

interface IUpdateClientDTO {
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

interface IClientsRepository {
	findById(id: string): Client;
	findByName(name: string): Client;
	list(): Client[];
	create({ name, cpf, sex, email }: ICreateClientDTO): void;
	update(id: string, { name, cpf, sex, email }: IUpdateClientDTO): void;
	delete(id: string): void;
}

export { ICreateClientDTO, IUpdateClientDTO, IClientsRepository };
