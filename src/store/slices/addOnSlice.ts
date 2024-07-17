import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface AddOn {
  name: string;
  price: number;
}

export interface ISateAddOn {
  addOn: AddOn[];
}

const DEFAULT_STATE: ISateAddOn = {
  addOn: [],
};

const initialState: ISateAddOn = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  return persistedState ? JSON.parse(persistedState).addon : DEFAULT_STATE;
})();

export const addOnSlice = createSlice({
  name: 'addon',
  initialState,
  reducers: {
    saveAddOn: (state, action: PayloadAction<ISateAddOn>) => {
      state.addOn = action.payload.addOn;
    },
    resetAddOn: state => {
      state.addOn = [];
    },
  },
});

export const { saveAddOn, resetAddOn } = addOnSlice.actions;
export const selectAddOn = (state: RootState) => state.addon.addOn;

export default addOnSlice.reducer;
