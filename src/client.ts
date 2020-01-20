import ApolloClient from "apollo-boost";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import introspectionQueryResultData from "./fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({fragmentMatcher});

export const client = new ApolloClient({
  uri: process.env.SERVER,
  cache
});
