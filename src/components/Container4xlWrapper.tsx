import { ReactNode } from 'react';

type Container4xlWrapperProps = {
  children: ReactNode;
  className?: string;
};

const Container4xlWrapper = ({
  children,
  className
}: Container4xlWrapperProps) => {
  return (
    <div
      className={`flex w-full max-w-4xl justify-center ${className} `}
    >
      {children}
    </div>
  );
};

export default Container4xlWrapper;
