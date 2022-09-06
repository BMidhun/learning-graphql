import { gql } from "@apollo/client";

const SIGNUP_ACTION = gql`
  mutation signUp(
    $credentials: CredentialInput!
    $name: String!
    $bio: String!
  ) {
    signUp(credentials: $credentials, name: $name, bio: $bio) {
      errors {
        message
      }
      token
    }
  }
`;

export { SIGNUP_ACTION };
