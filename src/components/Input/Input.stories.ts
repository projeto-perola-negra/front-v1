import type { Meta, StoryObj } from "@storybook/react";

import Input from ".";

const meta = {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Input Label",
    placeholder: "Placeholder",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Singleline: Story = {};
export const Multiline: Story = {
  args: {
    multiline: true,
  },
};
