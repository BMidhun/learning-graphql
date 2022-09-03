import {ApolloServer} from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers/"
import dbClient from "./db.config";
import { getUserData } from "./utils/auth";



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}:any) => {
        const authorization = req.headers.authorization;
        const userInfo = getUserData(authorization);
        
        return {
            dbClient,
            userInfo
        }
    }
})


server.listen().then(serverInfo => {
     console.log("Server is running on::", serverInfo.url)
})