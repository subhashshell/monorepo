import React from "react";
interface ITabItems {
    id: string;
    name: string;
    url: string;
}
export interface TabsPropsInt {
    tabsItems: ITabItems[];
    selectedTab: string;
    onTabChange?: (url: string) => void;
}
export declare const Tabs: React.FC<TabsPropsInt>;
export {};
