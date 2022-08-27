import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button, PropsInt} from './Button'
const meta: Meta = {
    title: 'Buttons',
    component: Button,
}

export default meta;


const Template: Story<PropsInt> = (args:any) => <Button {...args}/>
export const Default = Template.bind({});
export const Secondary = Template.bind({});
Default.args = {
    children: 'Primary Button click me',
    variant: 'primary'
}

Secondary.args = {
    children: 'Secondary Button',
    variant: 'secondary'
}