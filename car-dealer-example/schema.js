import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Mutations 

  type Mutation {

    carCreate(name:String!, make:String!, color:String! )

    groupDelete(groupId:ID!)
    groupPublish(groupId:ID!)
    groupUnPublish(groupId:ID!)
    groupAddCars(groupId:ID!, carId:ID!)
    groupRemoveCars(groupId:ID!, carId:ID!)
    groupCreate(name:String! , description:String! , image:imageInput , carId: ID! , featureSet: GroupFeatureFields)
  }

  input imageInput {
    url:String!
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
