import axios from 'axios';
import {setHeaders} from './headers';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_MY_ITEMS = 'GET__MY_ITEMS';

export const getItems = (userId) => {
  return (dispatch) => {
    axios.get(`/api/users/${userId}/items`, userId)
      .then(res => {
        dispatch({type: GET_ITEMS, items: res.data})
        dispatch(setHeaders(res.headers))
      })
      .catch((res) => {
        dispatch(setHeaders(res.headers));
      })
  }
}
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

// export const getMyItems = () => {
//   return (dispatch) => {
//     axios.get(`/api/my_items`)
//       .then(res => {
//         dispatch({type: GET_MY_ITEMS, items: res.data})
//         dispatch(setHeaders(res.headers))
//       })
//       .catch((res) => {
//         dispatch(setHeaders(res.headers));
//       })
//   }
// }