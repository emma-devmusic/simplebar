import { createSlice } from '@reduxjs/toolkit';
import { DataUserProfile, User } from '../../types/user';

interface UserSlice {
    userSetting: User | null;
    userProfile: DataUserProfile | null;
    username: string;
}

const initialState: UserSlice = {
    userSetting: null,
    userProfile: null,
    username: '',
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserProfile() {},
        getUserSetting() {},
        clearAuthRedux(state) {
            state.userProfile = null
            state.userSetting = null
            state.username = ''
        }
    }
});

export const {
    getUserProfile,
    getUserSetting,
    clearAuthRedux,
} = authSlice.actions;

export default authSlice.reducer;
