import {
  AUTH,
} from '../actions';

const initialState = { 
  currentUser: {}
}

const auths = (state = initialState, action) => {
  switch(action.type) {
    case AUTH:
      return {
        currentUser: action.currentUser
      }
    default:
      return state
  }
}

export default auths
