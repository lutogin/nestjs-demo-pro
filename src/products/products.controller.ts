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

@Controller('products')
export class ProductsController {
  @Get('/docs/')
  @Redirect('https://docs.nestjs.com/')
  getDocks(
    @Query('version') version) {
    if (version === 5) {
      return { url: 'https://docs.nestjs.com/controllers' }
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Req()
      req: Request,
    @Res()
      res: Response,
  ): any {
    return res.json({ msg: 'Create endpoint.' });
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
    return res.send({msg: `Get by id endpoint for ID = ${data.id}).` });
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
