import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { ProductDetailsEntity } from './entity/product-details.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(ProductDetailsEntity)
    private readonly productDetailsRepository: Repository<ProductDetailsEntity>
  ) {}

  BASE_RELATIONS = ['productDetails']; // Return with a product entity.

  // DB create logic
  async create(product: CreateProductDTO): Promise<Product> {
    const {
      name,
      price,
      quantity,
      dimension,
      partNumber,
      weight,
      manufacture,
      origin
    } = product;

    const productDetails = await this.productDetailsRepository.save({
      dimension,
      partNumber,
      weight,
      manufacture,
      origin,
    });

    const newProduct = await this.productRepository.save({
      name,
      price,
      quantity,
      productDetails
    });

    return newProduct;
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: this.BASE_RELATIONS });
  }

  async findById(id: number): Promise<Product> {
    return this.productRepository.findOne({ id }, { relations: this.BASE_RELATIONS })
  }

  async delete(id: number): Promise<DeleteResult> {
    const productForDelete = await this.productRepository.findOne(
      { id },
      { relations: this.BASE_RELATIONS }
    );

    await this.productDetailsRepository.delete({ id: productForDelete.productDetails.id });

    return this.productRepository.delete({ id });
  }

  async update(id: number, newProductData: UpdateProductDto): Promise<Product> {
    const {
      name,
      price,
      quantity,
      dimension,
      partNumber,
      weight,
      manufacture,
      origin
    } = newProductData;

    const productForUpdate = await this.productRepository.findOneOrFail(
      { id },
      { relations: this.BASE_RELATIONS }
      );

    const productDetailsForUpdate = await this.productDetailsRepository.findOne(
      { id: productForUpdate.productDetails.id }
    );

    await this.productDetailsRepository.merge(
      productDetailsForUpdate,
      {
        dimension,
        partNumber,
        weight,
        manufacture,
        origin
      }
    );

    await this.productRepository.merge(productForUpdate, {
      name,
      price,
      quantity,
    });

    await this.productDetailsRepository.save(productDetailsForUpdate);
    await this.productRepository.save(productForUpdate);

    return { ...productForUpdate, productDetails: productDetailsForUpdate };
  }
}
