import { gql } from "@apollo/client";

const GET_POST = gql`
query($take:Int!, $skip:Int!){
  posts(take:$take, skip:$skip){
    id
    title
    content
    createdAt
    author{
      name
    }
  }
}
`

export {GET_POST};