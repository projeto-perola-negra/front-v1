import type { Meta, StoryObj } from "@storybook/react";

import NavBar from ".";

const meta = {
  title: "Components/NavBar",
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {};
