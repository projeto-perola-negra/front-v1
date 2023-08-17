import { ReactNode, useId } from "react";
import Text from "../Text";

export interface InputProps {
  label?: ReactNode;
  placeholder?: string;
  multiline?: boolean;
}

export default function Input(props: InputProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id}>
        <Text size="small" className="text-primary-black-2">
          {props.label}
        </Text>
      </label>
      {!props.multiline ? (
        <input
          placeholder={props.placeholder}
          id={id}
          className="shadow-input rounded-2xl h-8 px-2
            placeholder:text-xs placeholder:text-primary-black-4"
        />
      ) : (
        <textarea
          placeholder={props.placeholder}
          id={id}
          rows={3}
          className="shadow-input rounded-2xl p-2
            placeholder:text-xs placeholder:text-primary-black-4"
        />
      )}
    </div>
  );
}
