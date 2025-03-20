import { LocaleEnum } from './locales'

export interface DefaultPageProps {
  params: Promise<{ lang: LocaleEnum }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
