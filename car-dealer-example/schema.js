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
    groupCreate(input:groupInput!)
    groupUpdate(input:groupInput!): GroupUpdateResponse!
  }

  type GroupUpdateResponse {
    userErrors: [UserErrors!]!
    group:Group // here Group is nullable since if there is any error, no group is returned.
  }

  type UserErrors{
    message:String!
    field:[String!]!
  }


  input groupInput {
    name:String  
    description:String  
    image:imageInput  
    carId: ID 
    featureSet: GroupFeatureFields
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
