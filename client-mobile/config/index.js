import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://h8-p3-c2-orc-belva.foxhub.space/',
  cache: new InMemoryCache(),
});

export default client