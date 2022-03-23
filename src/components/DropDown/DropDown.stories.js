import React from 'react';
import DropDown from './DropDown';

export default {
    title: 'Component/DropDown',
    component: DropDown,
};

const optionsList = new Array(10).fill('key').map((val,i) => ({value: `${val} ${i+1}`, label: `Option ${i+1}`}));

const Template = (args) => <div style={{margin: 20}}><DropDown {...args} onChange={val => console.log(val)}/></div>;

export const Default = Template.bind({});
Default.args = {
     optionsList,
     placeholder : 'Select option',
     label: 'Select Field'

};

export const Prefilled = Template.bind({});
Prefilled.args = {
     optionsList,
     placeholder : 'Select option',
     value: 'key 5',
     label: 'Select Field'

};

export const Error = Template.bind({});
Error.args = {
    placeholder : 'Select option',
    errorMessage: "Please enter Valid Information",
    isError: true,
    label: 'Select Field',
    optionsList
};