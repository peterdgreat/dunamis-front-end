import React, { Fragment } from 'react';
import { InputField } from './InputField';



export default {
    title: 'Design System/Atoms/Input',
    component: InputField,
};


const InputTemplate = (args) => <InputField {...args} />;

export const Default = InputTemplate.bind({});
Default.args = {
    name: "name",
    type: "text",
    label: "Text Field",
    placeholder: "Enter your name"
};

export const Icon = InputTemplate.bind({});
Icon.args = {
    name: "name",
    type: "text",
    label: "Text Field",
    placeholder: "Search Data",
    prefixIcon: 'Search'
};

export const Error = InputTemplate.bind({});
Error.args = {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "info@abc.com",
    errorMessage: "Please enter Valid Information",
    isError: true
};
