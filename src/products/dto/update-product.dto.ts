import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  readonly quantity: number;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  // Property od product-details
  @IsOptional()
  @IsString()
  readonly partNumber: string;

  @IsOptional()
  @IsString()
  readonly dimension: string;

  @IsOptional()
  @IsInt()
  readonly weight: number;

  @IsOptional()
  @IsString()
  readonly manufacture: string;

  @IsOptional()
  @IsString()
  readonly origin: string;
}
