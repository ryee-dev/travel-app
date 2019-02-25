import React from 'react';
import { HeaderWrapper } from './SiteHeader.css';
import TopClassesPanel from '../class-panel/ClassPanel';

interface HeaderProps {
  mainText: string;
  subText?: string;
  bgColor: string;
  showPanel: boolean;
}

const SiteHeader = (props: HeaderProps) => (
  <HeaderWrapper style={{ backgroundColor: props.bgColor }}>
    <h2>{props.mainText}</h2>
    <h3>{props.subText}</h3>

    {props.showPanel && <TopClassesPanel/>}
  </HeaderWrapper>
);

export default SiteHeader;
