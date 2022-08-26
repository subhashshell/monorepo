import React from 'react'
import { Meta, Story } from '@storybook/react'

import { IconsWrapper } from './IconsWrapper'
import { Icon } from './Icon';
const meta: Meta = {
    title: 'Icons',
    component: IconsWrapper,
}

export default meta;


const Template: Story = (args) => {
    console.log('-------', args)
    return <IconsWrapper {...args}> <Icon name="card-in-hand" className="c-icon c-icon--nudge-down-1_5 c-icon--space-after-2" /></IconsWrapper>
}

// export const Default = ()=> <Button variant='primary'>Click Msse</Button>
export const Default = Template.bind({});
{/* <Icon name="card-in-hand" className="c-icon c-icon--nudge-down-1_5 c-icon--space-after-2" /> */}
Default.args = {
    children: <div></div>
}