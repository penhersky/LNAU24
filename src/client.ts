import ApolloClient from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {ApolloLink, concat} from "apollo-link";
import introspectionQueryResultData from "./fragmentTypes.json";

const httpLink = new HttpLink({
  uri: process.env.SERVER
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "auth-token": sessionStorage.getItem("mainToken") || null
    }
  });

  return forward(operation);
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({fragmentMatcher});

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache
});
