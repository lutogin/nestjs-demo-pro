import {
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Column,
  OneToMany, JoinTable,
} from 'typeorm';
import { PhotoEntity } from '../../photos/entity/photo.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  email: string;

  @Column()
  password: string;

  @OneToMany(
    type => PhotoEntity,
    photoEntity => photoEntity.user,
    {
      cascade: ['insert', 'update'],
      onDelete: 'CASCADE'
    })
  @JoinTable()
  photos: PhotoEntity[]
}
