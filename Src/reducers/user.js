import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
  } from "../actions/";
  
  export default (
    state = {
        getError: false,
        userData:{},
    },
    action
  ) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return {
          ...state,
          getError:false
        };
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          getError:false,
          userData: action.userData
        };
      case LOGIN_USER_FAILURE:
        return {
          ...state,
          getError:true,
        };                 
      default:
        return state;
    }
  };