import { ReactNode } from "react";
import Heading from "../Heading";
import Text from "../Text";

export interface BlockContentProps {
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
          <div className="overflow-hidden rounded-2xl w-112 h-112">
            {props.aditionalContent}
          </div>
        )}
      </div>
    ),
    secondary: () => (
      <div className="flex flex-row-reverse gap-8">
        <div className="flex flex-col gap-4 w-112">
          <Heading variant="h2">{props.title}</Heading>
          <Text className="text-primary-black-3 font-normal">
            {props.textContent}
          </Text>
        </div>
        {props.aditionalContent && (
          <div className="overflow-hidden rounded-2xl flex-1 h-112">
            {props.aditionalContent}
          </div>
        )}
      </div>
    ),
    tertiary: () => (
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <Heading variant="h2" className="flex-1 text-right">
            {props.title}
          </Heading>
          <Text className="text-primary-black-3 font-normal flex-1">
            {props.textContent}
          </Text>
        </div>
        {props.aditionalContent && (
          <div className="overflow-hidden rounded-2xl w-full">
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
