import type { Meta, StoryObj } from "@storybook/react";

import TimeLineLine from ".";

const meta = {
  title: "Components/TimeLineLine",
  component: TimeLineLine,
  args: {
    title: "2023",
    children: "Time Line Line Content",
  },
} satisfies Meta<typeof TimeLineLine>;

export default meta;
type Story = StoryObj<typeof TimeLineLine>;

export const Right: Story = {
  args: { variant: "right" },
};
export const Left: Story = {
  args: { variant: "left" },
};
