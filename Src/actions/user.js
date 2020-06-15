
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE"

const getLoginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST
  }
}

const receiveUserData = userData => {
  return {
    type: LOGIN_USER_SUCCESS,
    userData
  }
}

const getUserDataFailiure = () => {
  return {
    type: LOGIN_USER_FAILURE
  }
}


export const loginUser = (userName, password) => async dispatch => {
  var loginData = {
    "userName" : userName,
    "password" : password
  }
  dispatch(getLoginUserRequest())
    if (loginData.userName == "Clarion@clarion.com" && loginData.password == "Clarion123") {
        dispatch(receiveUserData(loginData))
        return true
    } else {
        dispatch(getUserDataFailiure())
        alert('User Authentication Failed. Please Check Username and Password !')
        return false
    } 
}
