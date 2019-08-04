import { useState } from "react";
import { graphql, compose } from "react-apollo";
import { object, func } from "prop-types";
import {
  getItemsQuery,
  upvoteItemMutation,
  addItemMutation
} from "../queries/vote";

const propTypes = {
  getItemsQuery: object.isRequired,
  upvoteItemMutation: func.isRequired,
  addItemMutation: func.isRequired
};

const List = ({ getItemsQuery, upvoteItemMutation, addItemMutation }) => {
  const [itemInput, updateItemInput] = useState("");
  const addItem = () => {
    const name = itemInput;
    addItemMutation({
      variables: {
        name
      }
    })
      .then(res => {
        getItemsQuery.refetch();
        console.log({ res });
      })
      .catch(err => console.log(err.message));
    updateItemInput("");
  };
  const upvote = id => {
    upvoteItemMutation({
      variables: {
        id
      }
    })
      .then(res => console.log({ res }))
      .catch(err => console.log(err.message));
  };

  if (getItemsQuery.loading) return <div>Loading</div>;
  console.log(getItemsQuery);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="item name"
          name="itemName"
          value={itemInput}
          onChange={e => updateItemInput(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul id="book-list">
        {getItemsQuery.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.votes} -{" "}
            <button onClick={() => upvote(item.id)} type="button">
              upvote
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
  graphql(addItemMutation, { name: "addItemMutation" }),
  graphql(upvoteItemMutation, { name: "upvoteItemMutation" })
)(List);
