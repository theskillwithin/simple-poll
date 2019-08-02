import fetch from "isomorphic-unfetch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import { createHttpLink } from "apollo-link-http";
import Books from "../components/Books";

const List = ({ client }) => {
  return (
    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>
  );
};

List.getInitialProps = async () => {
  // apollo client setup
  const client = await new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: "http://localhost:3000/graphql",
    fetch: typeof window !== "undefined" ? fetch.bind() : fetch
  });
  return { client };
};

export default List;
