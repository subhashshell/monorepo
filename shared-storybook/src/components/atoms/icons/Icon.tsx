/*
 * Created on Sun Aug 14 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved
 */
import React from 'react';
export interface IconsProps {
    name: string;
    className?: string;
}
export const Icon: React.FC<IconsProps> = ({ name, className }) => {
  return (
    <>
    <svg className={`c-icon ${className ? className: ''}`} aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
    </>
  );
};
