/*
 * Created on Sun Aug 14 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved
 */
import React, { HTMLAttributes, ReactNode, useState } from "react";

export interface PropsInt extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    variant: 'primary' | 'secondary'
}
export const Button:React.FC<PropsInt> = ({children,variant='primary', ...props}: PropsInt)=> {
    const [count, setCount] = useState(0)
    return (
        <button {...props} style={{backgroundColor: variant === 'primary' ? 'blue' : 'gray'}} onClick={()=> setCount(count+1)}>
            {children} {count} 
        </button>
    )
}