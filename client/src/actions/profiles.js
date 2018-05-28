import axios from 'axios';
import {setHeaders} from './headers';
import {getItems} from './items'
export const PROFILES = 'PROFILES';

export const getProfiles = () => {
  return (dispatch) => {
    debugger
    axios.get('/api/users')
      .then((res) => {
        dispatch({type: PROFILES, profiles: res.data});
        dispatch(setHeaders(res.headers));
      })
      .catch((res) => {
        dispatch(setHeaders(res.headers));
      })
  }
}