import { Product } from "../models/Product";

interface ICreateProductDTO {
	productCode: number;
	name: string;
	fabrication: "nacional" | "importado";
	size: number;
	value: number;
}

interface IUpdateProductDTO {
	productCode: number;
	name: string;
	fabrication: "nacional" | "importado";
	size: number;
	value: number;
}

interface IProductsRepository {
	findById(id: string): Product;
	findByName(name: string): Product;
	findByCode(productCode: number): Product;
	list(): Product[];
	create({
		productCode,
		name,
		fabrication,
		size,
		value,
	}: ICreateProductDTO): void;
	update(
		id: string,
		{ productCode, name, fabrication, size, value }: IUpdateProductDTO,
	): void;
	delete(id: string): void;
}

export { ICreateProductDTO, IUpdateProductDTO, IProductsRepository };
