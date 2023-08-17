import { ReactNode } from "react";
import Heading from "../Heading";
import Text from "../Text";

export interface TimeLineLineProps {
  variant?: "right" | "left";
  title?: ReactNode;
  children?: ReactNode;
}

export default function TimeLineLine(props: TimeLineLineProps) {
  const variant = props.variant || "right";

  const CurrentVariant = {
    right: () => (
      <div className="flex gap-x-4">
        <div className="flex-1">
          <Heading
            variant="h3"
            className="text-primary-green-1 text-right h-6 flex items-center
              justify-end"
          >
            {props.title}
          </Heading>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <div className="w-6 h-6 rounded-full border-4 border-primary-green-1" />

          <div className="w-1 flex-1 bg-primary-red-3 rounded-full" />
        </div>
        <div className="flex-1">
          <Text className="text-primary-black-3">{props.children}</Text>
        </div>
      </div>
    ),
    left: () => (
      <div className="flex gap-x-4">
        <div className="flex-1">
          <Text className="text-primary-black-3 text-right">
            {props.children}
          </Text>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <div className="w-6 h-6 rounded-full border-4 border-primary-green-1" />

          <div className="w-1 flex-1 bg-primary-red-3 rounded-full" />
        </div>
        <div className="flex-1">
          <Heading
            variant="h3"
            className="text-primary-green-1 h-6 flex items-center"
          >
            {props.title}
          </Heading>
        </div>
      </div>
    ),
  }[variant];

  return <CurrentVariant />;
}
