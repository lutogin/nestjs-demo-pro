import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  // Property od product-details
  @IsNotEmpty()
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
