import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import NewsPieceResolver from "./resolvers/news-piece-resolver";
import LocationResolver from "./resolvers/location.resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [NewsPieceResolver, LocationResolver],
    emitSchemaFile: true
  });

  const server = new GraphQLServer({
    schema
  });

  server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();
