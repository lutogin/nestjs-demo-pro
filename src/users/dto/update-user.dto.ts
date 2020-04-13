import {
  IsEmail,
  IsString,
  IsOptional,
  IsArray,
} from 'class-validator';
// import { UpdatePhotoDto } from '../../photos/dto/update-photo.dto';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly password: string;

  // @IsOptional()
  // @IsArray()
  // photos: UpdatePhotoDto[]
}
