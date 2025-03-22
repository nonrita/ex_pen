import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const FormButton = ({ children }: Props) => {
  return (
    <button className="bg-amber-500 text-white text-base font-bold py-1 px-8 rounded-md">
      {children}
    </button>
  );
};

export default FormButton;
