import React from 'react';

import { InputField } from './InputField';

export default {
  title: 'InputFields/InputField',
  component: InputField,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control : "color" },
    onChange: { action: "Input changed" }
  },
};



const Template = (args) => <InputField {...args} />;


export const FirstNameInputField = Template.bind({});
FirstNameInputField.args = {
    label: 'firstName',
    labelText: "First name:",
    name: 'firstName',
    id: 'firstName',
    placeholder: "First name...",
    backgroundColor: "black",
    color: "white",
};

export const LastNameInputField = Template.bind({});
LastNameInputField.args = {
    label: 'lastName',
    labelText: "Last name:",
    name: 'lastName',
    id: 'lastName',
    placeholder: "Last name...",
    backgroundColor: "black",
    color: "white",
};
