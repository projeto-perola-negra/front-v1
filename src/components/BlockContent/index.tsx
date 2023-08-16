import { ReactNode } from "react";
import Heading from "../Heading";
import Text from "../Text";

export interface BlockContentProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, "title"> {
  variant?: "primary" | "secondary" | "tertiary";
  title?: ReactNode;
  textContent?: ReactNode;
  aditionalContent?: ReactNode;
}

export default function BlockContent(props: BlockContentProps) {
  const variant = props.variant || "primary";

  const VariantComponent = {
    primary: () => (
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <Heading variant="h2">{props.title}</Heading>
          <Text className="text-primary-black-3 font-normal">
            {props.textContent}
          </Text>
        </div>
        {props.aditionalContent && (
          <div className="overflow-hidden rounded-2xl w-112 h-112 bg-gray-500">
            {props.aditionalContent}
          </div>
        )}
      </div>
    ),
    secondary: () => (
      <div className="flex flex-row-reverse gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <Heading variant="h2">{props.title}</Heading>
          <Text className="text-primary-black-3 font-normal">
            {props.textContent}
          </Text>
        </div>
        {props.aditionalContent && (
          <div className="overflow-hidden rounded-2xl w-147 h-112 bg-gray-500">
            {props.aditionalContent}
          </div>
        )}
      </div>
    ),
    tertiary: () => (
      <div className="flex flex-col gap-4">
        <div className="flex gap-8">
          <Heading variant="h2" className="flex-1 text-right">
            {props.title}
          </Heading>
          <Text className="text-primary-black-3 font-normal flex-1">
            {props.textContent}
          </Text>
        </div>
        {props.aditionalContent && (
          <div className="overflow-hidden rounded-2xl w-full h-64 bg-gray-500">
            {props.aditionalContent}
          </div>
        )}
      </div>
    ),
  }[variant];

  return (
    <div>
      <VariantComponent />
    </div>
  );
}
