import { Product } from "../entities/product";

export class StockAlertService {
  getLowStockProducts(products: Product[]): Product[] {
    return products.filter((p) => p.isLowStock());
  }
}
