import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {}
  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id,
    @Body() user: UpdateUserDto
  ): Promise<UpdateResult> {
    return this.usersService.update(id, user)
  }

  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id: number): Promise<DeleteResult> {
    return this.usersService.delete(id);
  }
}
