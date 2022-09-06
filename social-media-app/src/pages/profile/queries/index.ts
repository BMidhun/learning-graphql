import { gql } from "@apollo/client";

const GET_USER_PROFILE = gql`
  query ($userId: ID!, $skip: Int!, $take: Int!) {
    profile(userId: $userId) {
      id
      bio
      isMyProfile
      user {
        name
      }
      posts(skip: $skip, take: $take) {
        id
        title
        content
        createdAt
        published
      }
    }
  }
`;

const GET_MY_PROFILE = gql`
 query ($skip: Int!, $take: Int!){
  me {
    id
    bio
    isMyProfile
    user {
      name
    }
    posts(skip: $skip, take: $take) {
      id
      title
      content
      createdAt
      published
    }
  }
 }
`


const CREATE_POST = gql`
 mutation createPost($input:PostInput!){
  postCreate(input:$input) {
    errors{
      message
    }
    post{
      id
    }
  }
 }
`;



export {GET_USER_PROFILE, CREATE_POST, GET_MY_PROFILE};