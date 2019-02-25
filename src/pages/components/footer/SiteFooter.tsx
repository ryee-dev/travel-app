import React from 'react';
import { FooterWrapper, FooterCol, SocialMediaCol } from './SiteFooter.css';
import { FbIcon, IgIcon, TwitterIcon } from './assets';

const SiteFooter = () => (
  <FooterWrapper>
    <FooterCol>
      <h3>Site Name</h3>
      <p>Privacy</p>
      <p>Site Map</p>
      <p>Terms and Conditions</p>
    </FooterCol>
    <FooterCol>
      <h3>Account</h3>
      <p>Sign Up</p>
      <p>Log In</p>
      <p>My Account</p>
    </FooterCol>
    <FooterCol>
      <h3>Events</h3>
      <p>Post an Event</p>
      <p>Questions?</p>
      <p>Report an Event</p>
    </FooterCol>
    <SocialMediaCol>
      <img src={FbIcon} alt="facebook"/>
      <img src={IgIcon} alt="instagram"/>
      <img src={TwitterIcon} alt="twitter"/>
    </SocialMediaCol>
  </FooterWrapper>
);

export default SiteFooter;
