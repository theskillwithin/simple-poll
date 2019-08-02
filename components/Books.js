import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

const List = ({ data }) => {
  if (data.loading) return <div>Loading</div>;
  return (
    <div>
      <ul id="book-list">
        {data.authors.map(author => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default graphql(getAuthorsQuery)(List);
