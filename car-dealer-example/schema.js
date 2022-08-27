import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }

  type Car { }

  // Removing Manual and Automatic Group types to remove low-level implementation which are not concerning the client.

  type Group {
    Image
    [Car]
    [GroupFeatures]
  }

  // Also renaming the AutomaticGroupFeatures to GroupFeatures. If groupfeatures are empty then it is maualgroup and if not they are automatic group.
 
  type GroupFeatures {  }

  
`;
