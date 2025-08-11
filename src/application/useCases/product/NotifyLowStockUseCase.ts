import { IProductRepository } from "@/domain/repositories/product-repository";
import { StockAlertService } from "@/domain/services/StockAlertService";

export class NotifyLowStock {
  constructor(
    private productRepo: IProductRepository,
    private alertService: StockAlertService,
    private notifier: {
      sendEmail: (to: string, subject: string, body: string) => Promise<void>;
    }
  ) {}

  async execute() {
    const products = await this.productRepo.findAll();
    const lowStock = this.alertService.getLowStockProducts(products);

    for (const p of lowStock) {
      await this.notifier.sendEmail(
        "estoque@empresa.com",
        `Estoque baixo: ${p.name}`,
        `O produto ${p.name} está com apenas ${p.quantity} unidades em estoque.`
      );
    }
  }
}
