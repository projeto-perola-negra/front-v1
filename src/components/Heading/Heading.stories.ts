import type { Meta, StoryObj } from "@storybook/react";

import Heading from ".";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Hello World!",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: { variant: "h1" },
};
export const Heading2: Story = {
  args: { variant: "h2" },
};
export const Heading3: Story = {
  args: { variant: "h3" },
};
