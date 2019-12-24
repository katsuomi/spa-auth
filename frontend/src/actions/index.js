import axios from 'axios';
import { useDispatch } from 'react-redux';

export const SIGNUP = 'SIGNUP';

const ROOT_URL = "http://localhost:3000/api"

export const useActions = () => {
  const dispatch = useDispatch();
  const signup = (data) => {
    console.log(data)
    axios.post(`${ROOT_URL}/auth/signup`,data)
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

  const login = (data) => {
    console.log(data)
    axios.post(`${ROOT_URL}/auth/login`,data)
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

  return [ signup,login ]
}
