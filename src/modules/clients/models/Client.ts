import { v4 as uuid } from "uuid";

class Client {
	id?: string;
	name: string;
	cpf: string;
	sex: string;
	email: string;
	createdAt?: Date;
	updatedAt?: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { Client };
