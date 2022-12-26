import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://4b2f-140-0-155-243.ap.ngrok.io/',
  cache: new InMemoryCache(),
});

export default client