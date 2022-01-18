import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: { 
      handleChange: { action: "Changed Form Input Field" },
      backgroundColor: { control: 'color' },
      color: { control: 'color' },
      borderRadius: {
        control: { type: 'range', min: 0, max: 50, step: 1 },
      },
      width: {
        control: { type: 'range', min: 50, max: 250, step: 4 },
      },
},
  variant: {
    options: [
      "defaultInputField",
      "firstNameInputField",
      "lastNameInputField",
      "invalidInputField",
    ],
  },
};

const Template = (args) => <InputField {...args} />;

export const DefaultInputField = Template.bind({});
DefaultInputField.args = {
  placeholder: "Default...",
  variant: "defaultInputField",
  size: "small",
  mode: "default",
  label: "default label"
};

export const FirstNameInputField = Template.bind({});
FirstNameInputField.args = {
  placeholder: "First name...",
  variant: "firstNameInputField",
  size: "medium",
  mode: "default",
  label: "First name:",
};

export const LastNameInputField = Template.bind({});
LastNameInputField.args = {
  placeholder: "Last name...",
  variant: "lastNameInputField",
  size: "medium",
  mode: "default",
  label: "Last name:"
};

export const InvalidInputField = Template.bind({});
InvalidInputField.args = {
  placeholder: "Invalid input",
  variant: "invalidInputField",
  size: "large",
  mode: "invalid",
  label: "Invalid name !"
};
