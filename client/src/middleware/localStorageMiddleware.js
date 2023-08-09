import { O_LOGOUT } from "../components/ServerActions";
import { ORGANIZER_LOGIN_SUCCESS } from "../components/ServerActions";
const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    
    if (action.type === 'LOGIN_SUCCESS') {
      localStorage.setItem('loggedInUser', JSON.stringify(state.loginUser.loginDetails.user));
    } else if (action.type === 'LOGOUT') {
      localStorage.removeItem('loggedInUser');
    } else if(action.type === ORGANIZER_LOGIN_SUCCESS) {
        localStorage.setItem('loggedInOrganizer', JSON.stringify(state.loginOraganizer.organizerLoginDetails));
      } else if (action.type === O_LOGOUT) {
        localStorage.removeItem('loggedInOrganizer');
      }
    
    return result;
};
export default localStorageMiddleware;