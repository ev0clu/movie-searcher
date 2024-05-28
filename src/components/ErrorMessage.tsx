import { ReactNode } from 'react';

type ErrorMessageProps = {
  children: ReactNode;
  className?: string;
};

const ErrorMessage = ({ children, className }: ErrorMessageProps) => {
  return (
    <div
      className={`
          flex flex-1 flex-col items-center justify-center
          ${className}`}
    >
      {children}
    </div>
  );
};
export default ErrorMessage;
