import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Manual Group has a relationship with Image and GroupMembership

  type ManualGroup {
    Image
    [GroupMembership]
  }

  // Automatic Group has a relationship with Image, GroupMembership and AutomaticGroupFeature

  type AutomaticGroup {
   Image
   [GroupMembership]
   [AutomaticGroupFeatures]
  }

  type AutomaticGroupFeatures {  }

  // GroupMemebership has a relationship with Group and Car

  type GroupMembership {
    Group
    Car
  }
`;
