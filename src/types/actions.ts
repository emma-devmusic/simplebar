import { NavigateFunction } from "react-router-dom";

export type ActionLogin = { email: string; password: string, navigate: NavigateFunction }
export type ActionLogout = { navigate: NavigateFunction }
export type ActionSetAuthState = {
    email: string,
    username: string,
    isAuthenticated: boolean,
    email_verified: boolean,
    account_verified: boolean,
    name: string,
    last_name: string,
}