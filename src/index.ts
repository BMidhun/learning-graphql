import {ApolloServer} from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers/"
import dbClient from "./db.config";



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:{
        dbClient
    }
})


server.listen().then(serverInfo => {
     console.log("Server is running on::", serverInfo.url)
})