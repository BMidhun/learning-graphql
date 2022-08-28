import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Mutations 

  type Mutation {
    create
    delete
    update // Update scalar fields in a type
    publish // mutation to update the group status as published
    unpublish // mutation to update the group status as unpublished
    createCars // mutation to create cars into a group
    removeCars // mutation to remove multiple cars from a group
  }

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
