import gql from "graphql-tag";

export const USER_DATA_NAV_BAR = gql`
  query {
    User {
      getAuthorizedUser {
        ... on result {
          redirect
        }
        ... on user {
          id
          name
          surname
          position
        }
      }
    }
  }
`;
