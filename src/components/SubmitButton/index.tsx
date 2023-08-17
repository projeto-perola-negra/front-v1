import Text from "../Text";

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SubmitButton(props: SubmitButtonProps) {
  return (
    <button
      {...props}
      className="bg-primary-green-1 rounded-2xl h-8 w-full shadow-input"
    >
      <Text size="paragraph" className="text-primary-white-1">
        {props.children}
      </Text>
    </button>
  );
}
