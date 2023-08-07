import { ReactNode } from "react";

export interface NavBarButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function NavBarButton(props: NavBarButtonProps) {
  const variant = props.variant || "primary";
  const className = props.className || "";

  return {
    primary: () => (
      <a
        {...props}
        className={`rounded flex justify-center items-center px-4 h-8
          text-paragraph bg-primary-green-1 text-primary-white-1 transition-all
          hover:invert-[.1] ${className}`}
      >
        {props.children}
      </a>
    ),
    secondary: () => (
      <a
        {...props}
        className={`rounded flex justify-center items-center px-4 h-8
          text-paragraph bg-primary-white-3 text-primary-black-2 transition-all
          hover:invert-[.1] ${className}`}
      >
        {props.children}
      </a>
    ),
  }[variant]();
}
