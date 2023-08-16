import type { Meta, StoryObj } from "@storybook/react";

import BlockContent from ".";

const meta = {
  title: "Components/BlockContent",
  component: BlockContent,
  args: {
    title: "Block Component Title",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae justo at tellus gravida maximus non ac augue. Nunc suscipit molestie risus, non tincidunt urna rutrum vitae. Integer vitae luctus nibh. Etiam consequat commodo orci. Praesent nec massa ipsum. Ut sed arcu ipsum. Cras bibendum diam elit, sit amet eleifend nibh eleifend et. Integer sit amet ex lacus. Donec placerat odio vel tellus dapibus vestibulum.",
    aditionalContent: "Block Component Additional Content",
  },
} satisfies Meta<typeof BlockContent>;

export default meta;
type Story = StoryObj<typeof BlockContent>;

export const Primary: Story = {
  args: { variant: "primary" },
};
export const Secondary: Story = {
  args: { variant: "secondary" },
};
export const Tertiary: Story = {
  args: { variant: "tertiary" },
};
