/*
 * Created on Mon Aug 22 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved.
 */


import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Tabs, TabsPropsInt } from './Tabs'

const meta: Meta = {
    title: 'Tabs',
    component: Tabs,
}

export default meta;


const Template: Story<TabsPropsInt> = (args) => <Tabs {...args}/>

export const Default = Template.bind({});

Default.args = {
    tabsItems : [
        { id: "0", name: "Invoices", url: "/InvoiceList" },
        { id: "1", name: "Fuel Price List", url: "/FuelPrice/FuelPriceList" },
        { id: "2", name: "Charges", url: "#" },
        { id: "3", name: "Electronic Invoice Data", url: "#" },
    ],
    selectedTab: '0',
    onTabChange: ()=> {}
}
