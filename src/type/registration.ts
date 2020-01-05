import gql from "graphql-tag";

export const REGISTRATION = gql`
  mutation(
    $surname: String!
    $name: String!
    $email: String!
    $password: String!
  ) {
    startRegister(
      name: $surname
      surname: $name
      email: $email
      password: $password
    ) {
      message
      error
    }
  }
`;

export const FINISH_REGISTRATION = gql`
  mutation($key: String!) {
    finishRegister(key: $key) {
      message
      error
    }
  }
`;
