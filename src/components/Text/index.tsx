import { ReactNode } from "react";

export interface TextProps
  extends Omit<React.HTMLProps<HTMLParagraphElement>, "size"> {
  children?: ReactNode;
  size?: "paragraph" | "small" | "xs" | "2xs";
}

export default function Text(props: TextProps) {
  const size = props.size || "paragraph";
  const className = `font-medium ${props.className}`;

  return {
    paragraph: () => (
      <p
        {...props}
        className={`text-paragraph text-primary-black-2 ${className}`}
      >
        {props.children}
      </p>
    ),
    small: () => (
      <p {...props} className={`text-small text-primary-black-3 ${className}`}>
        {props.children}
      </p>
    ),
    xs: () => (
      <p {...props} className={`text-xs text-primary-black-3 ${className}`}>
        {props.children}
      </p>
    ),
    "2xs": () => (
      <p {...props} className={`text-2xs text-primary-black-3 ${className}`}>
        {props.children}
      </p>
    ),
  }[size]();
}
