import { Product } from "../models/Product";

interface ICreateProductDTO {
	name: string;
	fabrication: string;
	size: number;
	value: number;
}

interface IUpdateProductDTO {
	name: string;
	fabrication: string;
	size: number;
	value: number;
}

interface IProductsRepository {
	findById(id: string): Product;
	findByName(name: string): Product;
	list(): Product[];
	create({ name, fabrication, size, value }: ICreateProductDTO): void;
	update(
		id: string,
		{ name, fabrication, size, value }: IUpdateProductDTO,
	): void;
	delete(id: string): void;
}

export { ICreateProductDTO, IUpdateProductDTO, IProductsRepository };
