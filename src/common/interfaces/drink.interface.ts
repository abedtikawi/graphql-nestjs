import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ description: 'Description for a drink' })
export abstract class IDrink {
  @Field()
  name: string;
}
