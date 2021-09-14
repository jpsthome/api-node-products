import { Client } from "../models/Client";

interface ICreateClientDTO {
	name: string;
	fabrication: "nacional" | "importado";
	size: number;
	value: number;
}

interface IUpdateClientDTO {
	name: string;
	fabrication: "nacional" | "importado";
	size: number;
	value: number;
}

interface IClientsRepository {
	findById(id: string): Client;
	findByName(name: string): Client;
	list(): Client[];
	create({ name, fabrication, size, value }: ICreateClientDTO): void;
	update(
		id: string,
		{ name, fabrication, size, value }: IUpdateClientDTO,
	): void;
	delete(id: string): void;
}

export { ICreateClientDTO, IUpdateClientDTO, IClientsRepository };
