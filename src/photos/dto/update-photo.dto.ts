import { IsOptional, IsString } from 'class-validator';

export class UpdatePhotoDto {
  @IsOptional()
  @IsString()
  readonly url: string;
}
