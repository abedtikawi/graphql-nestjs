import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDrink } from 'src/common/interfaces/drink.interface';
import { loggerMiddleware } from 'src/common/middleware/logger.middleware';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CoffeeType } from '../enums/coffee-type.enum';
import { Flavor } from './flavor.entity';

@Entity()
@ObjectType({ description: 'Coffee Model', implements: () => IDrink })
export class Coffee implements IDrink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'A unique identifier for coffees' })
  id: number;
  @Field({ middleware: [loggerMiddleware ] })
  @Column()
  name: string;
  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors?: Flavor[];

  @CreateDateColumn()
  createdAt?: Date;

  @Column({ nullable: true })
  type: CoffeeType;
}
