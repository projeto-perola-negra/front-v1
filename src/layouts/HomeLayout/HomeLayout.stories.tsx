import type { Meta, StoryObj } from "@storybook/react";

import HomeLayout from ".";

const meta = {
  title: "Layouts/HomeLayout",
  component: HomeLayout,
  args: {
    children: (
      <>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
      </>
    ),
  },
} satisfies Meta<typeof HomeLayout>;

export default meta;
type Story = StoryObj<typeof HomeLayout>;

export const Primary: Story = {};
