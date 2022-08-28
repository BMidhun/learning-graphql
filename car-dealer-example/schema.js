import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Renaming bodyHtml to description

  type Group {
    id:ID!
    name:String!
    description:String!
    image:Image!
    cars(skip:Int!, take:Int!):[Car!]!
    featureSet:GroupFeatureSet
  }

  type Image{
    id:ID!
    url:String!
  }

  type GroupFeatureSet {
    features:[GroupFeatures!]!
    applyFeaturesSeparately:Boolean!
  }

  
 
  type GroupFeatures { 
    feature : String!
   }

  
`;
