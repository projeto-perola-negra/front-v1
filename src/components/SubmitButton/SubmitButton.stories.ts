import type { Meta, StoryObj } from "@storybook/react";

import SubmitButton from ".";

const meta = {
  title: "Components/SubmitButton",
  component: SubmitButton,
  args: {
    children: "Submit",
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Primary: Story = {};
