import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface Plan {
  name: string;
  price: number;
  type: PlanType;
}

type PlanType = 'monthly' | 'yearly';

const DEFAULT_STATE: Plan = {
  name: 'Arcade',
  price: 9,
  type: 'monthly',
};

const initialState: Plan = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  return persistedState ? JSON.parse(persistedState).plans : DEFAULT_STATE;
})();

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    savePlan: (state, action: PayloadAction<Plan>) => {
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.type = action.payload.type;
    },
    resetPlan: state => {
      state.name = DEFAULT_STATE.name;
      state.price = DEFAULT_STATE.price;
      state.type = DEFAULT_STATE.type;
    },
  },
});

export const { savePlan, resetPlan } = plansSlice.actions;
export const selectPlan = (state: RootState) => state.plans;
export default plansSlice.reducer;
