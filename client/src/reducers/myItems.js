import {GET_MY_ITEMS} from '../actions/myItems';
const getMyItems = (state = [], action) => {
  switch (action.type) {
    case GET_MY_ITEMS:
      return action.myItems;
    default:
      return state;
  }
};

export default getMyItems;