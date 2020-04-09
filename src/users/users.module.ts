import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { PhotoEntity } from '../photos/entity/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, PhotoEntity]) // for ManyToOne
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
