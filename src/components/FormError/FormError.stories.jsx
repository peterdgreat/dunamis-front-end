import React from 'react';
import { FormError } from './FormError';


export default {
    title: 'Design System/Atoms/Form Error',
    component: FormError,
};


const Template = (args) => <FormError {...args} />;

export const Default = Template.bind({});
Default.args = {
    message: "Error Message"
};
