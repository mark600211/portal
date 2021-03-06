import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PatchOption {
  @Field()
  id: string;
  @Field()
  label: string;
}
