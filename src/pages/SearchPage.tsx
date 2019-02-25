import React from 'react';
import PageShell from './components/PageShell';
import SiteHeader from './components/header/SiteHeader';
import SearchPageBody from './components/searchPage/SearchPageBody';

const SearchPage = () => (
  <PageShell
    headerContent={
      <SiteHeader mainText="Education" bgColor="#005472" showPanel={true} />
    }
    bodyContent={<SearchPageBody />}
  />
);

export default SearchPage;
