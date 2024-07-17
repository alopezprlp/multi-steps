import { Children, FC, PropsWithChildren } from 'react';

export const LayoutForm: FC<PropsWithChildren> = ({ children }) => {
  const arrayChildren = Children.toArray(children);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-5 bg-white rounded-b-xl px-6 md:px-0 py-8 md:py-0 pt-4 md:pt-0">
        {arrayChildren.slice(0, -1)}
      </div>
      {arrayChildren.slice(-1)}
    </div>
  );
};
