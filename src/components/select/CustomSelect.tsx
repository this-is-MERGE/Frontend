// Custom components
import { Input, Select } from "@material-tailwind/react";
import React from "react";

function CustomSelect(props: {
  id: string;
  label: string;
  extra?: string;
  value: string;
  onChangeValue: (value: string) => void;
  error?: boolean;
  hasStateMessage?: boolean;
  stateMessage?: string;
  children?: React.ReactNode;
}) {
  const {
    label,
    id,
    extra,
    error,
    value,
    onChangeValue,
    hasStateMessage,
    stateMessage,
    children,
  } = props;

  return (
    <div className={`${extra ?? ""}`}>
      <label
        htmlFor={id}
        className="mb-[6px] text-sm font-medium leading-normal text-[#485585]"
      >
        {label}
      </label>
      <div className="mt-[6px]">
        <Select
          children={children}
          value={value}
          onChange={onChangeValue}
          error={!!error}
          size="lg"
        />
      </div>
      {hasStateMessage ? (
        <p className="ml-[14px] mt-[7px] h-[21px] text-sm font-medium leading-normal text-[#F56565]">
          {stateMessage}
        </p>
      ) : null}
    </div>
  );
}

export default CustomSelect;
