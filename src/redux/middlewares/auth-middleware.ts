
import SessionManager from "../../common/class/SessionManager";
import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { uiSetLoading } from "../slices/uiSlice";
import { ActionLogin, ActionLogout } from "../../types/actions";
import { clearAuthRedux, setAuthState } from "../slices/authSlice";


export const authMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<unknown>) => {
        const session = SessionManager.getInstance();

        next(action);
        if (action.type === 'auth/login') {
            state.dispatch(uiSetLoading(true))
            const payload = action.payload as ActionLogin
            try {
                await session.login({
                    email: payload.email,
                    password: payload.password
                })
                state.dispatch( setAuthState({
                    email: session.getAuthData()?.email || '',
                    username: session.getAuthData()?.name + ' ' + session.getAuthData()?.last_name,
                    isAuthenticated: true,
                    email_verified: session.getAuthData()?.email_verified || false,
                    account_verified: session.getAuthData()?.account_verified || false,
                    name: session.getAuthData()?.name || '',
                    last_name: session.getAuthData()?.last_name || '',
                }))

                state.dispatch(uiSetLoading(false))
            } catch (error) {
                console.log(error, 'nivel 3 - desde redux middleware');
                state.dispatch(uiSetLoading(false))
            }
        }

        if (action.type === 'auth/logout') {
            state.dispatch(uiSetLoading(true))
            const payload = action.payload as ActionLogout
            try {
                const success = await session.logout()
                if (success) {
                    state.dispatch(clearAuthRedux() )
                    state.dispatch(uiSetLoading(false))
                    payload.navigate('/login')
                }
            } catch (error) {
                state.dispatch(uiSetLoading(false))
                console.error(error, '| authMiddleware');
            }
        }
    }
}


