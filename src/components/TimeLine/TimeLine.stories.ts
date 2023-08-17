import type { Meta, StoryObj } from "@storybook/react";

import TimeLine from ".";

const meta = {
  title: "Components/TimeLine",
  component: TimeLine,
} satisfies Meta<typeof TimeLine>;

export default meta;
type Story = StoryObj<typeof TimeLine>;

export const Primary: Story = {};
