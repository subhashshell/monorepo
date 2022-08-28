import React, { HTMLAttributes, ReactNode } from "react";
export interface PropsInt extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';
}
export declare const Button: React.FC<PropsInt>;
