// import Swal from "sweetalert2";
import Encrypter from "./Encrypter";
import { fetchData } from "../../services/fetchData";
import { BasicData, DataUserLoginResponse, Permission, User, UserLoginResponse } from "../../types/user";
import { objPermissions } from "../helpers/permissions";

class SessionManager {
    private static instance: SessionManager;
    private static encrypter = new Encrypter()
    private userSession: DataUserLoginResponse | null = null; // Aquí se almacena la sesión del usuario
    private role: number | null = null;
    private userData: BasicData | null = null
    private token: string = ''
    private permissions: unknown = null

    private gettingSessionFromSessionStorage():void {
        const storedUser = sessionStorage.getItem("session");
        if (storedUser) {
            const userDecrypted = SessionManager.encrypter.decrypt(storedUser)
            if (!userDecrypted.error) {
                this.userSession = userDecrypted.data;
                const encryptedResponse:User = SessionManager.encrypter.decrypt(this.userSession?.permissions).data
                this.token = userDecrypted.data.access.accessToken
                this.permissions = encryptedResponse.permission;
                this.role = encryptedResponse.role_id
                this.userData = encryptedResponse.basic_data
            }
        }
    }

    public static getInstance(): SessionManager {
        console.log('GetInstance Shooting');
        if (!SessionManager.instance) {
            SessionManager.instance = new SessionManager();
        }
        return SessionManager.instance;
    }

    public async login(credentials: { email: string; password: string }) {
        try {
            const data:UserLoginResponse = await fetchData('/manage-auth/signin', 'POST', credentials)

            this.userSession = data.data;
            this.token = data.data.access.accessToken

            const encryptedResponse:User = SessionManager.encrypter.decrypt(this.userSession?.permissions).data
            this.permissions = encryptedResponse.permission;
            this.role = encryptedResponse.role_id
            this.userData = encryptedResponse.basic_data

            const userEncryted = SessionManager.encrypter.encrypt(JSON.stringify(this.userSession))
            sessionStorage.setItem("session", userEncryted);

        } catch (error) {
            console.error(error, 'Nivel 2');
            throw error;
        }
    }

    public async logout() {
        if (!this.userSession) {
            this.gettingSessionFromSessionStorage()
        }
        try {
            await fetchData('/manage-auth/signout', 'GET', null, this.token)
            this.userSession = null;
            sessionStorage.removeItem("session");
            return true;
        } catch (error) {
            console.error(error, 'SessionManager-Logout');
            return false;
        }
    }

    public getSessionData():DataUserLoginResponse | null {
        if (!this.userSession) {
            this.gettingSessionFromSessionStorage()
        }
        return this.userSession;
    }

    public getPermissions() {
        if (!this.userSession) {
            this.gettingSessionFromSessionStorage()
        }
        return objPermissions(this.permissions as Permission[]);
    }

    public getRole():number | null {
        if (!this.userSession) {
            this.gettingSessionFromSessionStorage()
        }
        return this.role;
    }

    public getAuthData(): BasicData | null {
        if (!this.userSession) {
            this.gettingSessionFromSessionStorage()
        }
        return this.userData;
    }

    public isAuthenticated(): boolean {
        return this.getSessionData() !== null;
    }
}

export default SessionManager;
