import { Product } from "../../models/Product";
import {
	ICreateProductDTO,
	IProductsRepository,
	IUpdateProductDTO,
} from "../IProductsRepository";

class ProductsRepository implements IProductsRepository {
	private products: Product[];
	private static INSTANCE: ProductsRepository; // TODO: estudar padrão singleton

	private constructor() {
		this.products = [];
	}

	public static getInstance(): ProductsRepository {
		if (!ProductsRepository.INSTANCE) {
			ProductsRepository.INSTANCE = new ProductsRepository();
		}
		return ProductsRepository.INSTANCE;
	}

	findById(id: string): Product {
		return this.products.find((prod) => {
			prod.id === id;
		});
	}

	findByName(name: string): Product {
		const produto = this.products.find((prod) => prod.name === name);
		return produto;
	}
	findByCode(productCode: number): Product {
		const produto = this.products.find(
			(prod) => prod.productCode === productCode,
		);
		return produto;
	}

	list(): Product[] {
		return this.products;
	}
	create({
		productCode,
		name,
		fabrication,
		size,
		value,
	}: ICreateProductDTO): void {
		const product = new Product();
		Object.assign(product, {
			productCode,
			name,
			fabrication,
			size,
			value,
			createdAt: new Date(),
		});
		this.products.push(product);
	}
	update(
		id: string,
		{ productCode, name, fabrication, size, value }: IUpdateProductDTO,
	): void {
		// TODO: ver se isso aqui ta funcionando
		const product = this.findById(id);
		Object.assign(product, {
			productCode,
			name,
			fabrication,
			size,
			value,
			updatedAt: new Date(),
		});
	}
	delete(id: string): void {
		this.products.filter((product) => {
			product.id === id;
		});
	}
}

export { ProductsRepository };
