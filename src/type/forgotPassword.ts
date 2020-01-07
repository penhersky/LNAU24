import gql from "graphql-tag";

export const FORGOT_PASSWORD_START = gql`
  query($email: String!) {
    forgotPasswordStart(email: $email) {
      error
      message
    }
  }
`;

export const FORGOT_PASSWORD_FINISH = gql`
  mutation($key: String!, $newPassword: String!) {
    forgotPasswordFinish(key: $key, newPassword: $newPassword) {
      message
      error
    }
  }
`;
