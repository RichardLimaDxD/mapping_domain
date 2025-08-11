import { IProductRepository } from "@/domain/repositories/product-repository";

export class SetMinimumStock {
  constructor(private productRepo: IProductRepository) {}

  async execute(productId: string, minStock: number) {
    const product = await this.productRepo.findById(productId);
    if (!product) throw new Error("Produto não encontrado");
    product.minStock = minStock;
    await this.productRepo.update(product);
  }
}
