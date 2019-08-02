import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getItemsQuery = gql`
  {
    items {
      name
      votes
      id
    }
  }
`;

const List = ({ data }) => {
  if (data.loading) return <div>Loading</div>;
  return (
    <div>
      <ul id="book-list">
        {data.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.votes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default graphql(getItemsQuery)(List);
