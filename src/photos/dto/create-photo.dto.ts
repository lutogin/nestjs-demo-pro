import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePhotoDto {
  @IsNotEmpty()
  @IsString()
  readonly url: string;
}
