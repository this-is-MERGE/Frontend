// Custom components
import { Input } from "@material-tailwind/react";
import React from "react";

function CustomInputField(props: {
  id: string;
  label: string;
  extra?: string;
  placeholder?: string;
  value: string;
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  hasStateMessage?: boolean;
  disabled?: boolean;
  stateMessage?: string;
  type?: string;
}) {
  const {
    label,
    id,
    extra,
    type,
    placeholder,
    error,
    value,
    onChangeValue,
    hasStateMessage,
    stateMessage,
    disabled,
  } = props;

  return (
    <div className={`${extra ?? ""}`}>
      <label
        htmlFor={id}
        className="mb-[6px] text-sm font-medium leading-normal text-[#485585]"
      >
        {label}
      </label>
      {disabled ? (
        <div className="flex flex-col">
          <p className="text-black mb-2 mt-[10px] h-7 text-lg font-bold leading-7">
            {value}
          </p>
          <div className="h-[1px] w-full bg-[#8F9BBA]" />
        </div>
      ) : (
        <div className="mt-[6px]">
          <Input
            crossOrigin=""
            label=""
            type={type}
            placeholder={placeholder ?? ""}
            value={value}
            onChange={onChangeValue ?? null}
            error={!!error}
            size="lg"
            labelProps={{
              className: "before:mr-0 after:ml-0",
            }}
          />
        </div>
      )}

      {hasStateMessage ? (
        <p className="ml-[14px] mt-[7px] h-[21px] text-sm font-medium leading-normal text-[#F56565]">
          {stateMessage}
        </p>
      ) : null}
    </div>
  );
}

export default CustomInputField;
