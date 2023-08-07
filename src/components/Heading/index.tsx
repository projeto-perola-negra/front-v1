import { ReactNode } from "react";

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  children?: ReactNode;
  variant?: "h1" | "h2" | "h3";
}

export default function Heading(props: HeadingProps) {
  const variant = props.variant || "h1";
  const className = `font-medium ${props.className}`;

  return {
    h1: () => (
      <h1 {...props} className={`text-h1 text-primary-black-1 ${className}`}>
        {props.children}
      </h1>
    ),
    h2: () => (
      <h2 {...props} className={`text-h2 text-primary-black-2 ${className}`}>
        {props.children}
      </h2>
    ),
    h3: () => (
      <h3 {...props} className={`text-h3 text-primary-black-2 ${className}`}>
        {props.children}
      </h3>
    ),
  }[variant]();
}
