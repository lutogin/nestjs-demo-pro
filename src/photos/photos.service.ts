import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from './entity/photo.entity';
import { UpdateResult } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photoRepository
  ) {}

  async update(id: number, photo): Promise<UpdateResult> {
    return this.photoRepository.update({ id }, { photo })
  }
}
