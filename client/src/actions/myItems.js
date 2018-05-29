import axios from 'axios';
import {setHeaders} from './headers';
export const GET_MY_ITEMS = 'GET__MY_ITEMS';

export const getMyItems = (userId) => {
  return (dispatch) => {
    axios.get(`/api/users/${userId}/items`, userId)
      .then(res => {
        dispatch({type: GET_MY_ITEMS, myItems: res.data})
        dispatch(setHeaders(res.headers))
      })
      .catch((res) => {
        dispatch(setHeaders(res.headers));
      })
  }
}