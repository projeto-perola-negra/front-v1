import type { Meta, StoryObj } from "@storybook/react";

import Text from ".";

const meta = {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Hello World!",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Paragraph: Story = {
  args: { size: "paragraph" },
};
export const Small: Story = {
  args: { size: "small" },
};
export const XSmall: Story = {
  args: { size: "xs" },
};
export const _2XSmall: Story = {
  args: { size: "2xs" },
};
