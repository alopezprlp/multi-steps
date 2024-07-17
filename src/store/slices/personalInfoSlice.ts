import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export type User = {
  name: string;
  email: string;
  phone: string;
};

export interface PersonalInfoState {
  user: User;
}

const DEFAULT_STATE: PersonalInfoState = {
  user: { name: '', email: '', phone: '' },
};

const initialState: PersonalInfoState = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  return persistedState
    ? JSON.parse(persistedState).personalInfo
    : DEFAULT_STATE;
})();

export const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    savePersonalInfo: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetPeronalInfo: state => {
      state.user = { name: '', email: '', phone: '' };
    },
  },
});

export const { savePersonalInfo, resetPeronalInfo } = personalInfoSlice.actions;
export const selectPersonalInfo = (state: RootState) => state.personalInfo.user;

export default personalInfoSlice.reducer;
