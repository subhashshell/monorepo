import React from 'react'
import { Meta, Story } from '@storybook/react'

import {Checkbox} from './Checkbox'
const meta: Meta = {
    title: 'Checkbox',
    component: Checkbox,
}

export default meta;


const Template: Story = (args) => <Checkbox {...args}/>
export const Default = Template.bind({});

Default.args = {}