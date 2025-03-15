import { ReactNode } from 'react'

import Header from '@/components/layout/header'
import { getDictionary } from '@/dictionaries/get-dictionary'
import { LocaleEnum } from '@/types/locales'

export default async function DefaultLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: { lang: LocaleEnum }
}>) {
  const { lang } = params
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <Header dictionary={dictionary} />
      {children}
    </div>
  )
}
