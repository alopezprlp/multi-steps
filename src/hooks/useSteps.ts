import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectStep } from '@/store/slices/stepSlice.ts';
import {
  goToStep,
  prevStep,
  nextStep,
  resetStep,
} from '@/store/slices/stepSlice.ts';
import type { AppDispatch } from '@/store';

const useSteps = () => {
  const step = useAppSelector(selectStep);
  const dispatch: AppDispatch = useAppDispatch();

  const goTo = (step: number) => {
    dispatch(goToStep(step));
  };

  const prev = () => {
    dispatch(prevStep());
  };

  const next = () => {
    dispatch(nextStep());
  };

  const reset = () => {
    dispatch(resetStep());
  };

  return { step, goTo, prev, next, reset };
};

export default useSteps;
