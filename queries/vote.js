import { gql } from "apollo-boost";

export const getItemsQuery = gql`
  {
    items {
      name
      votes
      id
    }
  }
`;

export const addItemMutation = gql`
  mutation($name: String!) {
    addItem(name: $name) {
      name
      votes
      id
    }
  }
`;

export const upvoteItemMutation = gql`
  mutation($id: ID!) {
    upvoteItem(id: $id) {
      name
      votes
      id
    }
  }
`;
