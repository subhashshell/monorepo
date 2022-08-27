/*
 * Created on Mon Aug 22 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved.
 */


import React from "react";

export interface IPageHeaderProps {
  sectionName: string;
  title: string;
  introduction: string;
}

export const PageHeader = ({
  sectionName,
  title,
  introduction,
}: IPageHeaderProps) => {
  return (
    <>
      <p className="c-page-header__main-section-name">{sectionName}</p>
      <h1 className="c-page-header__title c-typography--h1">{title}</h1>
      <p className="c-page-header__introduction">{introduction}</p>
    </>
  );
};