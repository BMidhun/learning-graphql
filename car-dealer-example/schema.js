import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Removing features and applyFeaturesSeparately from Group and holding them into a subobject called GroupFeaturesSet

  type Group {
    id:ID!
    name:String!
    bodyHtml:String!
    imageId:ID!
    cars:[Car!]!
    featureSet:GroupFeatureSet
  }

  type GroupFeatureSet {
    features:[GroupFeatures!]!
    applyFeaturesSeparately:Boolean!
  }

  // Adding attributes to the schema
 
  type GroupFeatures { 
    feature : String!
   }

  
`;
