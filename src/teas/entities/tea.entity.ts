import { ObjectType } from '@nestjs/graphql';
import { IDrink } from 'src/common/interfaces/drink.interface';

@ObjectType({ implements: () => IDrink })
export class Tea implements IDrink {
  name: string;
}
