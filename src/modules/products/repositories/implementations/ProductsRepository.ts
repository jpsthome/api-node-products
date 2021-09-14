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
		return this.products.find((prod) => {
			prod.name === name;
		});
	}

	list(): Product[] {
		return this.products;
	}
	create({ name, cpf, sex, email }: ICreateProductDTO): void {
		const product = new Product();
		Object.assign(product, {
			name,
			cpf,
			sex,
			email,
			createdAt: new Date(),
		});
		this.products.push(product);
	}
	update(id: string, { name, cpf, sex, email }: IUpdateProductDTO): void {
		// TODO: ver se isso aqui ta funcionando
		const product = this.findById(id);
		Object.assign(product, {
			name,
			cpf,
			sex,
			email,
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
