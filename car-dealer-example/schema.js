import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car {
    id: ID!
    name: String!
    color: String!
    make: String!
  }

  type ManualGroup {
    id: ID!
    name: String!
    htmlBody: String!
    imageId: ID!
    memeberships: [GroupMembership!]!
  }

  type AutomaticGroup {
    id: ID!
    name: String!
    htmlBody: String
    imageId: ID!
    feature: [AutomaticGroupFeature!]!
    applyFeaturesSeparately: Boolean!
    memeberships: [GroupMembership!]!
  }

  type AutomaticGroupFeature {
    column: String!
  }

  type GroupMembership {
    groupId: ID!
    carId: ID!
  }
`;
