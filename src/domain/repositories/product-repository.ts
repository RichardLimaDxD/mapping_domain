import { Product } from "../entities/product";

export interface IProductRepository {
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
}
