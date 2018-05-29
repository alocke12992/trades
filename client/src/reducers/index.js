import {combineReducers} from 'redux';
import user from './user';
import flash from './flash';
import profiles from './profiles';
import items from './items';
import myItems from './myItems';

const rootReducer = combineReducers({
  user,
  flash,
  profiles,
  items,
  myItems,
});

export default rootReducer;
