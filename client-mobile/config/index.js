import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://4a14-118-137-122-44.ap.ngrok.io/',
  cache: new InMemoryCache(),
});

export default client