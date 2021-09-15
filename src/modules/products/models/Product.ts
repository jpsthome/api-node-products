import { v4 as uuid } from "uuid";

class Product {
	id?: string;
	productCode: number;
	name: string;
	fabrication: "nacional" | "internacional";
	size: number;
	value: number;
	createdAt?: Date;
	updatedAt?: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { Product };
