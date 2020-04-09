import {
  IsAlpha, IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { PhotoEntity } from '../../photos/entity/photo.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsArray()
  photos: PhotoEntity[]
}

