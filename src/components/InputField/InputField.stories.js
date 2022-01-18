import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: { handleChange: { action: "Changed Form Input Field" } },
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
};

export const FirstNameInputField = Template.bind({});
FirstNameInputField.args = {
  placeholder: "First name...",
  variant: "firstNameInputField",
  size: "small",
  mode: "default",
};

export const LastNameInputField = Template.bind({});
LastNameInputField.args = {
  placeholder: "Last name...",
  variant: "lastNameInputField",
  size: "medium",
  mode: "default",
};
export const InvalidInputField = Template.bind({});
LastNameInputField.args = {
  placeholder: "Invalid input",
  variant: "invalidInputField",
  size: "large",
  mode: "invalid",
};
