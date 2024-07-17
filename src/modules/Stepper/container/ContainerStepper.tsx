import useSteps from '@/hooks';
import { StepParts } from '@/modules/Stepper/Steps';

export const StepsContainer = () => {
  const { step } = useSteps();
  const currentStepModule = StepParts[step];

  if (!currentStepModule) {
    return <></>;
  }

  const { title, description, renderElement } = currentStepModule;

  return (
    <div className="h-full flex flex-col px-6 md:px-16 pt-8 pb-4">
      <h1 className="bg-white rounded-t-xl pt-10 pb-4 px-6 md:p-0 text-2xl md:text-3xl text-marine-blue font-bold md:mb-2">
        {title}
      </h1>
      <p className="bg-white px-6 md:px-0 pr-16 md:pr-4 text-cool-gray tracking-tight md:mb-8 md:font-medium">
        {description}
      </p>
      {renderElement}
    </div>
  );
};
