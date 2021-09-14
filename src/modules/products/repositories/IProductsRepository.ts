import { Product } from "../models/Product";

interface ICreateProductDTO {
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

interface IUpdateProductDTO {
	name: string;
	cpf: string;
	sex: string;
	email: string;
}

interface IProductsRepository {
	findById(id: string): Product;
	findByName(name: string): Product;
	list(): Product[];
	create({ name, cpf, sex, email }: ICreateProductDTO): void;
	update(id: string, { name, cpf, sex, email }: IUpdateProductDTO): void;
	delete(id: string): void;
}

export { ICreateProductDTO, IUpdateProductDTO, IProductsRepository };
