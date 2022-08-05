import React from 'react'
import Layout, { ILayout } from '../../shared/Layout/Layout';
import Region, { IRegion } from '../../shared/Region/Region';
import Header from '../../single-types/Header';
import Blocks from './components/Blocks';
import Body from './components/Body';
import Title from './components/Title';
import { IBasicPage } from './IBasicPage';

export default function BasicPage(props: IBasicPage) {
  
  console.log(props);

  // Regions
  const RegionHeader: IRegion = {
    title: 'header',
    children: (
      <>
        <Header {...props.headerData}></Header>
      </>
    )
  }
  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <Title content={props.pageData.Title}/>
        <Body content={props.pageData.Body}/>
        <Blocks {...props.pageData.Blocks}/>
      </>
    )
  }
  const RegionFooter: IRegion = {
    title: 'footer',
    children: (
      <></>
    )
  }
  
  // Layouts
  const LayoutStandard: ILayout = {
    title: 'alpha',
    regions: (
      <>
        <Region {...RegionHeader}/>
        <Region {...RegionContent}/>
        <Region {...RegionFooter}/>
      </>
    )
  }
  const LayoutNone: ILayout = {
    title: 'alpha',
    regions: (
      <>
      </>
    )
  }


  return (
    <Layout {...LayoutStandard}/>
  )
}
