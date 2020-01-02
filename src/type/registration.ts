import gql from "graphql-tag";

export const REGISTRATION = gql`
  mutation($surname: String!, $name: String!, $email: String!) {
    startRegister(name: $surname, surname: $name, email: $email) {
      message
      error
    }
  }
`;
