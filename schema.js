import { gql } from "apollo-server";

const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    isOutofStock: Boolean
    price: Float
    variant: [String!]!
    sizes: [Int!]!
    categoryId: ID!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: productFilter): [Product!]!
  }

  type Review {
    id: ID!
    title: String!
    comment: String!
    date: String!
    rating: Int!
    productId: ID!
  }

  type Query {
    products(filter: productFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  input productFilter {
    isOutofStock: Boolean
    avgRating: Int
  }
`;

export default typeDefs;
