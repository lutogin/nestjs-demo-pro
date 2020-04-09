import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PhotoEntity } from '../photos/entity/photo.entity';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,

    // @InjectRepository(PhotoEntity)
    // private readonly photosRepository: Repository<PhotoEntity>,
  ) {}

  BASE_RELATIONS = ['photos'];

  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save(user); // Photos create automatically with cascade
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: this.BASE_RELATIONS })
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(
      { id },
      { relations: this.BASE_RELATIONS });
  }

  async update(id: number, user: UpdateUserDto): Promise<UpdateResult> {
    return this.usersRepository.update({ id }, user)
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete({ id })
  }
}
