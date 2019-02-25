import { SITE_TITLE } from '../constants';

export function buildTitle(
  pageSlug: string,
  override: boolean = false,
): string {
  if (pageSlug !== '' && !override) {
    return `${pageSlug} - ${SITE_TITLE}`;
  }

  if (override) {
    return pageSlug;
  }

  if (pageSlug !== '' && override) {
    console.error(
      'Invalid string provided to pages/buildTitle with override set to true',
    );
  }

  return SITE_TITLE;
}
