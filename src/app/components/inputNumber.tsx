import React from 'react';

type Props = {
  tag: string;
  label: string;
  min?: number;
  max?: number;
  defaultValue?: number;
};

const InputNumber = ({ tag, label, min, max, defaultValue }: Props) => {
  return (
    <div className="flex justify-between">
      <label htmlFor={tag}>{label}</label>
      <input
        name={tag}
        id={tag}
        type="number"
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="border-2 rounded-md border-amber-200 w-[6em] pl-2"
      />
    </div>
  );
};

export default InputNumber;
