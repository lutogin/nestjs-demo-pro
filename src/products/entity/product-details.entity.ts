import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'product-details' })
export class ProductDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  partNumber: string;

  @Column({ length: 45 })
  dimension: string;

  @Column('float')
  weight: number;

  @Column({ length: 45 })
  manufacture: string;

  @Column({ length: 45 })
  origin: string;
}
