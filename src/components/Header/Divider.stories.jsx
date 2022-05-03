import React from 'react';
import Divider from './Divider';

export default {
    title: 'Design System/Atoms/Divider',
    component: Divider,
}

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});

Default.args = {
    primary: true,
}
