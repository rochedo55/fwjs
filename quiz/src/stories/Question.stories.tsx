import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Question from './Question'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mycomponents/Question',
  component: Question,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Question>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Question> = (args) => <Question {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  number_of_question:1,
  statement:'Value of first test',
  options:['coisa','coisa2']
  
};

export const Secondary = Template.bind({});
Secondary.args = {
    number_of_question:2,
    statement:'Value of second test',
    options:['think one','think two']
    
  };

