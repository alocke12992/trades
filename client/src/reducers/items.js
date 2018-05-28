import {GET_ITEMS} from '../actions/items';

const getItems = (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default getItems;