import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { ProductDetailsEntity } from './entity/product-details.entity';

@Module({
  // Add tables
  imports: [
    TypeOrmModule.forFeature([ProductEntity, ProductDetailsEntity])
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
