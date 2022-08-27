import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Removing GroupMembership to avoid exposure of implementation detail. Instead mapping Car entity to the Group

  type ManualGroup {
    Image
    [Car]
  }

  // Removing GroupMembership to avoid exposure of implementation detail. Instead mapping Car entity to the Group

  type AutomaticGroup {
   Image
   [Car]
   [AutomaticGroupFeatures]
  }

  type AutomaticGroupFeatures {  }

  
`;
