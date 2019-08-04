import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Location {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  native: string;

  @Field()
  emoji: string;
}

export type LocationData = {
  name: string;
  code: string;
  native: string;
  emoji: string;
};
