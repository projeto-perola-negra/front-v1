import { ReactNode } from "react";
import { IconType } from "react-icons";
import * as Fa from "react-icons/fa6";

export interface FooterLinksProps extends React.HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;
  leadingIcon?: keyof typeof Fa;
}

export default function FooterLink(props: FooterLinksProps) {
  const LeadingIcon: IconType | null = props.leadingIcon
    ? Fa[props.leadingIcon]
    : null;

  return (
    <a
      {...props}
      className="flex items-center gap-x-2 h-6 text-small text-primary-black-2
        hover:opacity-80 transition-all"
    >
      {LeadingIcon && <LeadingIcon size="1rem" />}
      {props.children}
    </a>
  );
}
