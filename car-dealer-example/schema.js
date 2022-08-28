import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Adding attributes to the schema

  type Group {
    id:ID!
    name:String!
    bodyHtml:String!
    imageId:ID!
    cars:[Car!]!
    features:[GroupFeatures!]!
    applyFeaturesSeparately:Boolean!
  }

  // Adding attributes to the schema
 
  type GroupFeatures { 
    feature : String!
   }

  
`;
