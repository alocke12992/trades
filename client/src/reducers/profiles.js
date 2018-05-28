import {
  PROFILES,
} from '../actions/profiles';

const profiles = (state = [], action) => {
  switch (action.type) {
    case PROFILES:
      return action.profiles;
    default:
      return state;
  }
};

export default profiles;
