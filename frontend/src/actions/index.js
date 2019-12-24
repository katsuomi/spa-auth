import axios from 'axios';
import { useDispatch } from 'react-redux';

export const AUTH = 'AUTH';
const ROOT_URL = "http://localhost:3000/api"

export const useActions = () => {
  const dispatch = useDispatch();
  const signup = (data) => {
    console.log(data)
    axios.post(`${ROOT_URL}/auth/`,data)
    .then((result) => {
      console.log("success:",result)
      const currentUser = result.data.data
      currentUser.accessToken = result.headers['access-token']
      dispatch({
        type: AUTH,
        currentUser
      })
    })
    .catch(err => {
      alert(err)
    })
  }

  const login = (data) => {
    console.log(data)
    axios.post(`${ROOT_URL}/auth/sign_in`,data)
    .then((result) => {
      console.log("success:",result)
      // dispatch({
      //   type: AUTH,
      //   current_user
      // })
    })
    .catch(err => {
      alert(err)
    })
  }

  const getMessage = () => {
    axios.get(`${ROOT_URL}/messages`)
    .then((result) => {
      console.log("success:",result)
      // dispatch({
      //   type: AUTH,
      //   current_user
      // })
    })
    .catch(err => {
      alert(err)
    })
  }


  return [ signup,login,getMessage ]
}
