import axios from 'axios';
import {setHeaders} from './headers';
export const PROFILES = 'PROFILES';

export const getProfiles = () => {
  return (dispatch) => {
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