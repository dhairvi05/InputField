import type { Meta, StoryObj } from '@storybook/react'
import InputField from './InputField'

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof InputField>

// Default
export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "uzence_design_studio",
    helperText: "This is the helper text",
    variant: "outlined",
    size: "md",
  },
}

// Error state
export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "xyz@gmail.com",
    invalid: true,
    errorMessage: "Invalid email address",
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
}

// Sizes
export const Sizes: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
  },
  render: (args) => (
    <>
      <InputField {...args} size="sm" />
      <InputField {...args} size="md" />
      <InputField {...args} size="lg" />
    </>
  ),
}

// Variants
export const Variants: Story = {
  args: {
    label: "Search",
    placeholder: "Type here...",
  },
  render: (args) => (
    <>
      <InputField {...args} variant="outlined" />
      <InputField {...args} variant="filled" />
      <InputField {...args} variant="ghost" />
    </>
  ),
}

// Loading
export const Loading: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    loading: true,
  },
}
