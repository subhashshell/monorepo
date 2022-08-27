import React, { ReactNode } from 'react'
import SVGIcons from './svg-icons'

export interface IconsPropsInt {
    children: ReactNode
}
export const IconsWrapper:React.FC<IconsPropsInt> = ({children})=> {
    return (
        <>
        <SVGIcons/>
        {children}
        </>
    )
}