import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../components/Cards/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mycomponents/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    borderRadius: { control: { type: 'range', min: 1, max: 30, step: 2 } }
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  Content:"Argumentos 1"
};

export const Secondary = Template.bind({});
Secondary.args = {
    Content:"Argumentos 2"
    
  };

