import { TriangleAlert } from 'lucide-react';
import { ReactNode } from 'react';

type ErrorMessageProps = {
  children: ReactNode;
  className?: string;
};

const ErrorMessage = ({ children, className }: ErrorMessageProps) => {
  return (
    <div
      className={`
          mt-1 flex flex-1 flex-row items-center justify-center gap-2 text-red-700
          ${className}`}
    >
      <TriangleAlert className="h-4 w-4" />
      {children}
    </div>
  );
};
export default ErrorMessage;
