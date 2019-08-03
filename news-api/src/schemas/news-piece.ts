import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
export default class NewsPiece {
  @Field()
  title: string;

  @Field()
  snippet: string;

  @Field()
  link: string;
}

export type NewsData = {
  title: string;
  snippet: string;
  link: string;
};
