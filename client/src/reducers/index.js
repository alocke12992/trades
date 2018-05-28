import {combineReducers} from 'redux';
import user from './user';
import flash from './flash';
import profiles from './profiles';
import items from './items';

const rootReducer = combineReducers({
  user,
  flash,
  profiles,
  items,
});

export default rootReducer;
