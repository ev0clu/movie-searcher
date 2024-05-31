import { ReactNode } from 'react';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

const SectionContainer = ({
  children,
  className
}: SectionContainerProps) => {
  return (
    <section
      className={`flex w-[290px] gap-3 sm:w-[500px] md:w-[700px] md:gap-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
