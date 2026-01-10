import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PointOfSalesSlice {
    currentPOS?: number;
}

const initialState: PointOfSalesSlice = {
    currentPOS: undefined,
};

const pointOfSalesSlice = createSlice({
    name: 'point_of_sales',
    initialState,
    reducers: {
        setCurrentPOS(state, action: PayloadAction<number>) {
            state.currentPOS = action.payload;
        },
    },
});

export const { setCurrentPOS } = pointOfSalesSlice.actions;

export default pointOfSalesSlice.reducer;
