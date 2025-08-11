import { Product } from "@/domain/entities/product";
import { IProductRepository } from "@/domain/repositories/product-repository";

export class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async update(product: Product): Promise<void> {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) this.products[index] = product;
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find((p) => p.id === id) || null;
  }

  async findAll(): Promise<Product[]> {
    return [...this.products];
  }
}
