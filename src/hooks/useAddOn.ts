import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  resetAddOn,
  saveAddOn,
  ISateAddOn,
  selectAddOn,
} from '@/store/slices/addOnSlice.ts';
import type { AppDispatch } from '@/store';

const useAddOn = () => {
  const addon = useAppSelector(selectAddOn);
  const dispatch: AppDispatch = useAppDispatch();

  const resetAddOns = () => {
    dispatch(resetAddOn());
  };

  const saveAddOns = (addOn: ISateAddOn) => {
    dispatch(saveAddOn(addOn));
  };

  return { resetAddOns, saveAddOns, addon };
};

export default useAddOn;
