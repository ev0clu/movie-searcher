import { ReactNode } from 'react';

type ContentWrapperProps = {
  children: ReactNode;
  className?: string;
};

const ContentWrapper = ({
  children,
  className
}: ContentWrapperProps) => {
  return (
    <div className={`${className} flex w-full max-w-4xl`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
