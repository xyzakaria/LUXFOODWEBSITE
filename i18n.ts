import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';

export const locales = ['en', 'fr', 'ar', 'tr'] as const;
export const defaultLocale = 'fr';
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../public/locales/${locale}.json`)).default as AbstractIntlMessages
  };
});