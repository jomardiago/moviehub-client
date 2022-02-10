import React from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
    user: null
};

if (localStorage.getItem('token')) {
    const decodedToken = jwtDecode(localStorage.getItem('token'));

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
    } else {
        initialState.user = decodedToken;
    }
}

const AuthContext = React.createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};

const AuthProvider = props => {
    const [ state, dispatch ] = React.useReducer(authReducer, initialState);

    const login = user => {
        localStorage.setItem('token', user.token);
        dispatch({ type: 'LOGIN', payload: user });
    };

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ user: state.user, login, logout }} { ...props } />
    );
}

export { AuthContext, AuthProvider };
