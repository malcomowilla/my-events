const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();

    if (action.type === 'LOGIN_SUCCESS') {
        localStorage.setItem('loggedInUser', JSON.stringify(state.loginUser.loginDetails.user));
    } else if (action.type === 'LOGOUT') {
        localStorage.removeItem('loggedInUser');
    }

    return result;
};

export default localStorageMiddleware;