export class Product {
  constructor(
    public id: string,
    public name: string,
    public sku: string,
    public quantity: number,
    public minStock: number,
    public size?: string,
    public color?: string
  ) {}

  isLowStock(): boolean {
    return this.quantity <= this.minStock;
  }
}
