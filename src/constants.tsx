/*
  Environment-independent constants go here rather than in .env so they can be changed
  without restarting the dev server
 */

// Unless it becomes *absolutely necessary*, we'll rely on a single breakpoint to
// separate mobile and non-mobile displays
export const HOME_PAGE_TITLE = process.env.REACT_APP_HOME_PAGE_TITLE || '';
export const SITE_TITLE = 'Company Name';

export const XS_BREAKPOINT_PX = 450;
export const MOBILE_BREAKPOINT_PX = 800;
export const XL_BREAKPOINT_PX = 1400;
export const NAV_HEIGHT_PX = 120;
export const NAV_HEIGHT_MOBILE_PX = 96;

export const MARGIN_XS_PX = 4;
export const MARGIN_SM_PX = 8;
export const MARGIN_MD_PX = 20;
export const MARGIN_LG_PX = 32;
