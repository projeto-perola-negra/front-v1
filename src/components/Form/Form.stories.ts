import type { Meta, StoryObj } from "@storybook/react";

import Form from ".";

const meta = {
  title: "Components/Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

export const Primary: Story = {};
