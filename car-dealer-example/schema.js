import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Add pagination capability to cars in a Group. skip input will skip the documents and take will take the amount of cars we need to provide. 

  type Group {
    id:ID!
    name:String!
    bodyHtml:String!
    imageId:ID!
    cars(skip:Int!, take:Int!):[Car!]!
    featureSet:GroupFeatureSet
  }

  type GroupFeatureSet {
    features:[GroupFeatures!]!
    applyFeaturesSeparately:Boolean!
  }

  
 
  type GroupFeatures { 
    feature : String!
   }

  
`;
