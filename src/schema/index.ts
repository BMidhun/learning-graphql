import {gql} from "apollo-server"

const typeDefs = gql`
 type Query {
    posts: [Post!]!
 }

 type Mutation {
   postCreate(title:String!, content:String!):PostCreateResponse
 }

 type ErrorMessage {
   message: String!
 }

 type PostCreateResponse {
   errors: [ErrorMessage!]!
   post:Post
 }

 type Profile {
   id:ID!
   bio:String!
   user: User!
 }

 type Post {
   id:ID!
   title: String!
   content:String!
   published:Boolean!
   createdAt:String!
   author:User!
 }

 type User {
   id:ID!
   email:String!
   name:String!
   profile : Profile!
   posts : [Post!]!
 }
`

export default typeDefs;