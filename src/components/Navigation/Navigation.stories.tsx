import { Story } from "@storybook/react";

import Navigation from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
};

const Template: Story = (args) => <Navigation children={undefined} {...args} />;
export const Default = Template.bind({});
Default.args = {
  /* the args you need here will depend on your component */
};
