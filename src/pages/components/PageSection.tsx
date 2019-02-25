import React, { Component } from 'react';
import { SectionWrapper } from './sectionWrappers.css';

interface Props {
  children: Node[];
  Wrapper?: typeof Component | null;
}

// TODO: Investigate type issue on PageSection Wrapper prop
const PageSection = ({ children, Wrapper }: Props) => {
  if (Wrapper !== null) {
    return (
      // @ts-ignore
      <Wrapper>{children}</Wrapper>
    );
  }

  return <SectionWrapper>{children}</SectionWrapper>;
};

export default PageSection;
