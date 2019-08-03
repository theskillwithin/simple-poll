import { object, func } from "prop-types";
import { graphql, compose } from "react-apollo";
import { getItemsQuery, upvoteItemMutation } from "../queries/vote";

const propTypes = {
  getItemsQuery: object.isRequired,
  upvoteItemMutation: func.isRequired
};

const List = ({ getItemsQuery, upvoteItemMutation }) => {
  const upvote = id => {
    upvoteItemMutation({
      variables: {
        id
      }
    });
  };

  if (getItemsQuery.loading) return <div>Loading</div>;
  return (
    <div>
      <ul id="book-list">
        {getItemsQuery.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.votes} -{" "}
            <button onClick={() => upvote(item.id)} type="button">
              {upvoteItemMutation.loading ? "loading..." : "upvote"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = propTypes;

export default compose(
  graphql(getItemsQuery, { name: "getItemsQuery" }),
  graphql(upvoteItemMutation, { name: "upvoteItemMutation" })
)(List);
