import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { ProductDetailsEntity } from './product-details.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('int')
  quantity: number;

  @Column()
  price: number;

  // Add relationship with ProductDetailsEntity
  @OneToOne(type => ProductDetailsEntity)
  @JoinColumn()
  productDetails: ProductDetailsEntity
}
