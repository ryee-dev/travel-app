import React from 'react';
import PageShell from './components/PageShell';
import SiteHeader from './components/header/SiteHeader';
import RefinedSearchPageBody from './components/refinedSearchPage/RefinedSearchPageBody';

const RefinedSearchPage = () => (
  <PageShell
    headerContent={
      <SiteHeader
        mainText="Skydiving in Barcelona"
        bgColor="#f14c38"
        showPanel={false}
      />
    }
    bodyContent={<RefinedSearchPageBody />}
  />
);

export default RefinedSearchPage;
