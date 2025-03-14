import { LocaleEnum } from './locales'

export interface DefaultPageProps {
  params: Promise<{ lang: LocaleEnum }>
}
