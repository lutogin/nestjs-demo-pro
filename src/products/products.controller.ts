import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
  Query,
  Param,
  Body,
  HttpCode,
  Header,
  Redirect,
  UseFilters,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product, UpdateProduct } from './interfaces/product.interface';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { TransformInterceptor } from '../common/interseptors/transform.interceptor';
import { DeleteResult } from 'typeorm';
import { inspect } from 'util';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
  constructor(private productsService: ProductsService) {};

  @Get('/docs/')
  @Redirect('https://docs.nestjs.com/')
  getDocks(
    @Query('version') version) {
    if (version === 5) {
      return { url: 'https://docs.nestjs.com/controllers' }
    }
  }

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return this.productsService.create(product);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: UpdateProductDto
  ) {
    return this.productsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.productsService.delete(+id);
  }

  // @Delete(':pid')
  // async delete(@Param() params): Promise<Product> {
  //   throw new NotFoundException('Something wrong');
  //   // return await this.productsService.delete(params.id);
  // }

  // @Get(':id')
  // getById(
  //   @Req()
  //   req: Request,
  //   @Res()
  //   res: Response,
  //   @Param()
  //   @Query()
  //   @Body()
  //   data
  // ): any {
  //   return res.send({msg: `Get by id endpoint for ID = ${data.id}.` });
  // }

  // @Get()
  // findAll(
  //   @Req()
  //     req: Request,
  //   @Res()
  //     res: Response,
  // ): any {
  //   return res.send({ msg: 'Find all.' });
  // }

  // @Put(':id')
  // update(
  //   @Req()
  //   req: Response,
  //   @Res()
  //   res: Response,
  //   @Param()
  //   param
  // ): any {
  //   return res.send({ msg: `Update endpoint for ${param.id}.` })
  // }

  // @Delete(':id')
  // delete(
  //   @Req()
  //   req: Request,
  //   @Res()
  //   res: Response,
  //   @Param()
  //   @Query()
  //   @Body()
  //     data
  // ): any {
  //   return res.send({ msg: `Delete endpoint for ${data.id}.` })
  // }
}
