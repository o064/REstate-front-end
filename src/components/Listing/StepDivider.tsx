import type { ReactNode } from 'react';

type StepDividerProps = {
  children: ReactNode;
  className?: string;
};

function StepDivider() {
  return <hr className="my-8 h-px border-0 bg-gray-300" />;
}

export default StepDivider;
