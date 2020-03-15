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
} from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
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
  create(
    @Req()
    req: Request,
    @Res()
    res: Response
  ): any {
    return res.send(this.productsService.create({ name: '', quantity: 2, price: '' }));
  }

  @Get(':id')
  getById(
    @Req()
    req: Request,
    @Res()
    res: Response,
    @Param()
    @Query()
    @Body()
    data
  ): any {
    return res.send({msg: `Get by id endpoint for ID = ${data.id}.` });
  }

  @Get()
  findAll(
    @Req()
      req: Request,
    @Res()
      res: Response,
  ): any {
    return res.send({ msg: 'Find all.' });
  }

  @Put(':id')
  update(
    @Req()
    req: Response,
    @Res()
    res: Response,
    @Param()
    param
  ): any {
    return res.send({ msg: `Update endpoint for ${param.id}.` })
  }

  @Delete(':id')
  delete(
    @Req()
    req: Request,
    @Res()
    res: Response,
    @Param()
    @Query()
    @Body()
      data
  ): any {
    return res.send({ msg: `Delete endpoint for ${data.id}.` })
  }
}
