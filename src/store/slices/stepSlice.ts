import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { stepsTitles } from '@/modules/Stepper/components/SideBar/config.ts';

export interface StepsState {
  step: number;
}

const DEFAULT_STATE: StepsState = {
  step: 0,
};

const initialState: StepsState = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  return persistedState ? JSON.parse(persistedState).steps : DEFAULT_STATE;
})();

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    goToStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    prevStep: state => {
      state.step -= 1;
    },
    nextStep: state => {
      if (state.step < stepsTitles.length - 1) {
        state.step += 1;
      }
    },
    resetStep: state => {
      state.step = 0;
    },
  },
});

export const { goToStep, prevStep, nextStep, resetStep } = stepsSlice.actions;
export const selectStep = (state: RootState) => state.steps.step;
export default stepsSlice.reducer;
