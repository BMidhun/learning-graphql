import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers/index.js";
import context from "./context.js";

// Scalar Types Int, Float, Boolean, String and ID

const server = new ApolloServer({ typeDefs, resolvers, context });

server
  .listen()
  .then((serverInfo) =>
    console.log("Apollo Server is running " + serverInfo.url)
  );
