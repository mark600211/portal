import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DefinedIndicatorEvent } from './defined-indicator-event.model';
import { DefinedIndicatorRelations } from './defined-indicator-relations.model';

@Entity()
@ObjectType()
export class DefinedIndicator extends DefinedIndicatorRelations {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
  @OneToMany(
    type => DefinedIndicatorEvent,
    events => events.payload,
    { nullable: true },
  )
  events: DefinedIndicatorEvent[];
}
