import * as Fa from "react-icons/fa6";
import type { Meta, StoryObj } from "@storybook/react";

import FooterLink from ".";

const meta = {
  title: "Components/FooterLink",
  component: FooterLink,
  args: {
    children: "Footer link",
    href: "#",
  },
  argTypes: {
    leadingIcon: {
      options: Object.keys(Fa),
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof FooterLink>;

export default meta;
type Story = StoryObj<typeof FooterLink>;

export const Primary: Story = {
  args: { leadingIcon: "FaReact" },
};
