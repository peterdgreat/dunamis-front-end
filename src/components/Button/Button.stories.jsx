import React from 'react';

import { Button } from './Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    type: 'contained',
    size: 'medium'
  },
};

const Template = (args) => <>
  <Button {...args} /> <hr/>
  <Button {...args} startIcon={"ArrowLeft"}/> <hr/>
  <Button {...args} endIcon={"ArrowRight"}/>
</>;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Button',
  format: "outlined"
};

