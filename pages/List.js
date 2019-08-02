import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Votes from "../components/Votes";

const List = () => {
  const client = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: "http://localhost:3000/graphql"
    }),
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <Votes />
    </ApolloProvider>
  );
};

export default List;
