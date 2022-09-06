import { gql } from "@apollo/client";

const LOGIN_ACTION = gql`
mutation login($credentials: CredentialInput!) {
  signIn(credentials: $credentials) {
    errors {
      message
    }
    token
  }
}
`;

export {LOGIN_ACTION}
