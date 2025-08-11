import { Product } from "@/domain/entities/product";
import { IProductRepository } from "@/domain/repositories/product-repository";

export class CreateProduct {
  constructor(private productRepo: IProductRepository) {}

  async execute(data: Omit<Product, "isLowStock">) {
    const product = new Product(
      data.id,
      data.name,
      data.sku,
      data.quantity,
      data.minStock,
      data.size,
      data.color
    );
    await this.productRepo.create(product);
  }
}
