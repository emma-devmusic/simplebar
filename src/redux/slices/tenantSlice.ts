import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetTenantPayload } from '../../types/tenant';

interface TenantSlice {
    tenant_name: string;
}

const initialState: TenantSlice = {
    tenant_name: '',
};

const tenantSlice = createSlice({
    name: 'tenant',
    initialState,
    reducers: {
        getTenantName(_state, _action: PayloadAction<GetTenantPayload>) {}, // middleware
        setTenantName(state, action: PayloadAction<string>) {
            state.tenant_name = action.payload;
        },
    },
});

export const { getTenantName, setTenantName } = tenantSlice.actions;

export default tenantSlice.reducer;
