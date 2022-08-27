import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Icon, IconsProps } from './Icon'
const meta: Meta = {
    title: 'Icons',
    component: Icon,
}

export default meta;


const Template: Story<IconsProps> = (args) => <Icon {...args}/>

// export const Default = ()=> <Button variant='primary'>Click Msse</Button>
export const Default = Template.bind({});
{/* <Icon name="card-in-hand" className="c-icon c-icon--nudge-down-1_5 c-icon--space-after-2" /> */}
Default.args = {
    className: "c-icon c-icon--nudge-down-1_5 c-icon--space-after-2"
}