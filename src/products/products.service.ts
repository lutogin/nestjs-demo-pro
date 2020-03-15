import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products = [];
  // DB create logic
  create(product) {
    return product;
  }
}
