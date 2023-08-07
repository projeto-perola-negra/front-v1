import type { Meta, StoryObj } from "@storybook/react";

import NavBarButton from ".";

const meta = {
  title: "Typography/NavBarButton",
  component: NavBarButton,
  args: {
    children: "Button",
  },
} satisfies Meta<typeof NavBarButton>;

export default meta;
type Story = StoryObj<typeof NavBarButton>;

export const Primary: Story = {
  args: { variant: "primary" },
};
export const Secondary: Story = {
  args: { variant: "secondary" },
};
