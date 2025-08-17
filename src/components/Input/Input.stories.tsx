import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number"],
    },
    clearable: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Text input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password input",
  },
};

export const Clearable: Story = {
  args: {
    placeholder: "Clearable input",
    clearable: true,
  },
};

export const PasswordClearable: Story = {
  args: {
    type: "password",
    placeholder: "Password with clear",
    clearable: true,
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Number input",
  },
};
