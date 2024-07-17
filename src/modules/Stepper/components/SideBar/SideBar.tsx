import { cn } from '@/utils';
import sidebarBg from '@/assets/bg-sidebar-desktop.svg';
import sidebarBgMobile from '@/assets/bg-sidebar-mobile.svg';
import useSteps from '@/hooks';
import { stepsTitles } from '@/modules/Stepper/components/SideBar/config.ts';

export const Sidebar = () => {
  const { step } = useSteps();

  return (
    <div className="w-full h-48 md:h-full relative">
      <img
        src={sidebarBg}
        className="hidden md:block absolute rounded-xl h-full w-full object-cover z-10"
      />
      <img
        src={sidebarBgMobile}
        className="block md:hidden absolute h-full w-full object-cover z-10"
      />
      <ul className="relative p-8 pt-12 md:pt-8 flex justify-center md:flex-col z-20 gap-4 md:gap-6">
        {stepsTitles.map((stepTitle, index) => (
          <li key={`titles-${index}`} className="flex items-center gap-4">
            <div
              className={cn(
                'flex items-center justify-center w-8 h-8 rounded-full border border-light-gray',
                {
                  'bg-light-blue border-light-blue': step === index,
                },
              )}
            >
              <span
                className={cn('text-white font-semibold text-sm', {
                  'text-marine-blue': step === index,
                })}
              >
                {index + 1}
              </span>
            </div>
            <div className="hidden md:flex flex-col uppercase">
              <span className="text-xs text-cool-gray">Step {index + 1}</span>
              <p className="text-alabaster text-sm font-semibold tracking-wider">
                {stepTitle}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
