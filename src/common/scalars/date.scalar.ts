import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom Scalar type';
  parseValue(value: number): Date {
    return new Date(value);
  }
  serialize(value: Date): number {
    console.log(`serializing :${value}`);
    return value.getTime();
  }
  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
