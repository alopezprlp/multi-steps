import PersonalInfo from '@/modules/Stepper/Steps/PersonalInfo';
import { Plans } from '@/modules/Stepper/Steps/Plan';
import { AddOns } from '@/modules/Stepper/Steps/Add-ons';
import { FinishUp } from '@/modules/Stepper/Steps/Review';

export const StepParts = [
  {
    title: 'Personal info',
    description: 'Please provide your name, email address and phone number.',
    renderElement: <PersonalInfo />,
  },
  {
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    renderElement: <Plans />,
  },
  {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    renderElement: <AddOns />,
  },
  {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
    renderElement: <FinishUp />,
  },
];
