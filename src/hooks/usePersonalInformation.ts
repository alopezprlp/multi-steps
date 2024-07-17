import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  resetPeronalInfo,
  savePersonalInfo,
  selectPersonalInfo,
  User,
} from '@/store/slices/personalInfoSlice.ts';
import type { AppDispatch } from '@/store';

const usePersonalInformation = () => {
  const user = useAppSelector(selectPersonalInfo);
  const dispatch: AppDispatch = useAppDispatch();

  const resetPersonalInformation = () => {
    dispatch(resetPeronalInfo());
  };

  const savePersonalInformation = (user: User) => {
    dispatch(savePersonalInfo(user));
  };

  return { resetPersonalInformation, savePersonalInformation, user };
};

export default usePersonalInformation;
