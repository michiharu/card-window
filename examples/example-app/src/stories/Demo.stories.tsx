import React from 'react';

import { ComponentStory } from '@storybook/react';

import CardWindowDemo from './Demo';

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardWindowDemo> = (args) => <CardWindowDemo {...args} />;

export const basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
basic.args = {};
