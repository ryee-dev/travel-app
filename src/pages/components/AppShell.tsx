import React from 'react';
// import { ThemeProvider} from 'styled-components';
// import styled from 'styled-components';
import { Location } from 'history';
import { withRouter } from 'react-router';
import Navbar from '../../navigation/navbar';
import SiteFooter from './footer/SiteFooter';

const AppShell = ({
  children, location
}: {
  children: Node;
  location: Location;
}) => (
  <>
    <Navbar
      isInternal={location.pathname !== '/'}
      isLogin={['/login', '/sign-up'].includes(location.pathname)}
      isUserAccount={location.pathname === '/my-account'}
    />
      {children}
    <SiteFooter />
  </>
);

// @ts-ignore
export default withRouter(AppShell);


