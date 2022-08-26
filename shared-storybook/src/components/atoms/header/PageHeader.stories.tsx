/*
 * Created on Mon Aug 22 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved.
 */


import React from 'react'
import { Meta, Story } from '@storybook/react'

import {PageHeader, IPageHeaderProps} from './PageHeader'

const meta: Meta = {
    title: 'PageHeader',
    component: PageHeader,
}

export default meta;


const Template: Story<IPageHeaderProps> = (args) => <PageHeader {...args}/>
export const Default = Template.bind({});

Default.args = {
    sectionName: "FINANCE",
    title: "Fuel Price Lists",
    introduction:
      "Compare price lists between selected countries or view historical pricing to see up to 6 months of past prices for any country.",
}