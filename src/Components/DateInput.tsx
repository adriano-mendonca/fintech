import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label:string;
}
export const DateInput = ({label, ...props}: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="date" {...props} />
    </div>
  );
};
