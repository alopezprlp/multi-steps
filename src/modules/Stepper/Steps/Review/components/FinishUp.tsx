import { useNavigate } from 'react-router-dom';

import { ButtonsLayout, LayoutForm } from '@/layouts';

import { Summary } from './Summary';
import { Button } from '@/components/Button';
import useSteps from '@/hooks';
import usePlans from '@/hooks/usePlans.ts';
import usePersonalInformation from '@/hooks/usePersonalInformation.ts';
import useAddOn from '@/hooks/useAddOn.ts';

export const FinishUp = () => {
  const { prev } = useSteps();
  const { resetPersonalInformation } = usePersonalInformation();
  const { resetPlans } = usePlans();
  const { resetAddOns } = useAddOn();
  const navigate = useNavigate();

  const handleConfirm = () => {
    resetPersonalInformation();
    resetPlans();
    resetAddOns();
    navigate('/thanks');
  };

  return (
    <LayoutForm>
      <Summary />
      <ButtonsLayout>
        <Button variant={'secondary'} onClick={prev}>
          Go Back
        </Button>
        <Button className="bg-purplish-blue" onClick={handleConfirm}>
          Confirm
        </Button>
      </ButtonsLayout>
    </LayoutForm>
  );
};
