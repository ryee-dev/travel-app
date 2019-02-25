import React from 'react';
import PageSection from './PageSection';
import { HeaderWrapper, BodyWrapper, FooterWrapper } from './sectionWrappers.css';

type PageProps = {
  helmetComponent?: any;
  headerContent?: any;
  bodyContent?: any;
  footerContent?: any;
};

const PageShell = ({
  helmetComponent,
  headerContent,
  bodyContent,
  footerContent
}: PageProps) => (
  <>
    {helmetComponent}
    {headerContent && (
      // @ts-ignore
      <PageSection Wrapper={HeaderWrapper}>{headerContent}</PageSection>
    )}
    {bodyContent && (
      // @ts-ignore
      <PageSection Wrapper={BodyWrapper}>{bodyContent}</PageSection>
    )}
    {footerContent && (
      // @ts-ignore
      <PageSection Wrapper={FooterWrapper}>{footerContent}</PageSection>
    )}
  </>
);

export default PageShell;
