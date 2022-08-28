import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Introducing hasCar attribute to implement the business logic of finding a car inside of a group.

  type Group {
    id:ID!
    name:String!
    description:String!
    image:Image!
    hasCar(id:ID!):Boolean!
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

  // Introducing enum to replace String representation for GroupFeatures
 
  type GroupFeatures { 
    feature : GroupFeatureFields!
   }

   enum GroupFeatureFields{
    INCLINE_ENGINE
    FOUR_CYLINDER_ENGINE
    TWIN_CYLINDER_ENGINE
    RED_PAINT
    BLACK_PAINT
   }

  
`;
