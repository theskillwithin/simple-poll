import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      genre
    }
  }
`;

const List = props => {
  console.log({ props });
  return (
    <div>
      <ul id="book-list">
        <li>list</li>
      </ul>
    </div>
  );
};

export default graphql(getBooksQuery)(List);
