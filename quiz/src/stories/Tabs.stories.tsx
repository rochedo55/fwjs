import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Tabs} from '../components/Tabs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mycomponents/Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id:1,
  content:"Parte 1", 
};

export const Secondary = Template.bind({});
Secondary.args = {
    id:2,
    content:"Parte ",
    
  };

