import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/modules/Stepper/components/SideBar';

export const MainLayout = () => {
  return (
    <section className="md:min-h-fit md:bg-white md:rounded-xl md:p-4 h-full md:h-[560px] md:w-[860px] md:shadow-3xl grid grid-rows-4 md:grid-rows-1 md:grid-cols-3">
      <div className="row-span-1 md:col-span-1 md:mr-4">
        <Sidebar />
      </div>
      <div className="relative row-span-3 md:col-span-2 -mt-[20%] md:mt-0 z-20">
        <div className="absolute bg-white bottom-0 w-full h-20 md:hidden" />
        <Outlet />
      </div>
    </section>
  );
};
