import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResponsiveHeader from './ResponsiveHeader';

export default {
  title: 'ResponsiveHeader',
  component: ResponsiveHeader,
} as ComponentMeta<typeof ResponsiveHeader>;

const Template: ComponentStory<typeof ResponsiveHeader> = (args) => (
  <ResponsiveHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  links: [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/about',
      text: 'About',
    },
    {
      to: '/contact',
      text: 'Contact',
    },
  ],
  logo: {
    src: 'https://via.placeholder.com/75',
    alt: 'Responsive Header Logo',
  },
};
