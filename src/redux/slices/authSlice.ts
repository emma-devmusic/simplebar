import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionLogin, ActionLogout, ActionSetAuthState } from '../../types/actions';
import SessionManager from '../../common/class/SessionManager';

interface AuthSlice {
    isAuthenticated: boolean,
    email: string,
    username: string,
    email_verified: boolean,
    account_verified: boolean,
    name: string,
    last_name: string,
}

const authData = SessionManager.getInstance().getAuthData()

const getInitialState = authData
    ? {
        email: authData.email || '',
        name: authData.name || '',
        last_name: authData.last_name || '',
        email_verified: authData.email_verified || false,
        account_verified: authData.account_verified || false,
        isAuthenticated: true,
        username: `${authData.name || ''} ${authData.last_name || ''}`,
    }
    : {}

const initialState: AuthSlice = {
    isAuthenticated: false,
    email: '',
    username: '',
    email_verified: false,
    account_verified: false,
    name: '',
    last_name: '',
    ...getInitialState,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(_state, _action: PayloadAction<ActionLogin>) {
            //Middleware
        },
        logout(_state, _action: PayloadAction<ActionLogout>) {
            //Middleware
        },
        setAuthState(state, action: PayloadAction<ActionSetAuthState>) {
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.isAuthenticated = true;
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
            state.email_verified = action.payload.email_verified;
            state.account_verified = action.payload.account_verified;

        },
        clearAuthRedux(state) {
            state.isAuthenticated = false
            state.email = ''
            state.username = ''
            state.name = ''
            state.last_name = ''
            state.email_verified = false
            state.account_verified = false
        }
    }
});

export const {
    login,
    logout,
    clearAuthRedux,
    setAuthState
} = authSlice.actions;

export default authSlice.reducer;
