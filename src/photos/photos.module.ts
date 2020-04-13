import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entity/user.entity';
import { PhotoEntity } from './entity/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, PhotoEntity]) // for ManyToOne
  ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
