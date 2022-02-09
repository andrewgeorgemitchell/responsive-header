import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HamburgerIcon from './HamburgerIcon';

export default {
  title: 'HamburgerIcon',
  component: HamburgerIcon,
} as ComponentMeta<typeof HamburgerIcon>;

const Template: ComponentStory<typeof HamburgerIcon> = (args) => (
  <HamburgerIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {};
