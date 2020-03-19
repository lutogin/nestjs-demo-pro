import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  // DB create logic
  async create(product) {
    this.products.push(product);
    return this.products[this.products.length-1];
  }

  async getAll(): Promise<Product[]> {
    return this.products;
  }

  async getOne(id: string): Promise<Product> {
    return this.products.find(product => product.id === id);
  }

  async delete(id: string): Promise<Product> {
    const index: number = this.products.findIndex(product => product.id === id);
    const deleteProduct = this.products[index];
    this.products.splice(index, 1);
    return deleteProduct;
  }
}
