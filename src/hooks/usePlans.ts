import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  resetPlan,
  savePlan,
  selectPlan,
  Plan,
} from '@/store/slices/planSlice.ts';
import type { AppDispatch } from '@/store';

const usePlans = () => {
  const plans = useAppSelector(selectPlan);
  const dispatch: AppDispatch = useAppDispatch();

  const resetPlans = () => {
    dispatch(resetPlan());
  };

  const savePlans = (plan: Plan) => {
    dispatch(savePlan(plan));
  };

  return { resetPlans, savePlans, plans };
};

export default usePlans;
