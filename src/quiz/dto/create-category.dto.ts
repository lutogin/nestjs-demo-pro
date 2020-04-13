import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDTO {
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}

export class CreateCategoryDTO {
  categories: CategoryDTO[];
}
