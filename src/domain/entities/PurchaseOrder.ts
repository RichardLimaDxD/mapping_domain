export class PurchaseOrder {
  constructor(
    public id: string,
    public productId: string,
    public quantity: number,
    public supplierId: string,
    public status: "PENDING" | "APPROVED" | "DELIVERED",
    public createdAt: Date
  ) {}
}
