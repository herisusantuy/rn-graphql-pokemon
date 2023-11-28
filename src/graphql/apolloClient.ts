import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.EXPO_PUBLIC_APOLLO_CLIENT,
  cache: new InMemoryCache()
});
