import React from "react";
import { Helmet } from 'react-helmet';
import { buildTitle } from './utils';
import PageShell from './components/PageShell';
import { HOME_PAGE_TITLE } from '../constants';
import HomePageHeader from "./components/homePage/HomePageHeader";
import HomePageBody from './components/homePage/HomePageBody';

const HomePage = () => (
  <PageShell
    helmetComponent={
      <Helmet>
        <title>{buildTitle(HOME_PAGE_TITLE, true)}</title>
      </Helmet>
    }
    headerContent={<HomePageHeader />}
    bodyContent={<HomePageBody />}
  />
);

export default HomePage;
