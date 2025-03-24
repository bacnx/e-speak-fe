import { ReactNode } from 'react'

import Header from '@/components/layout/header'
import { getDictionary } from '@/dictionaries/get-dictionary'
import { LocaleEnum } from '@/types/locales'

export default async function DefaultLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: Promise<{ lang: LocaleEnum }>
}>) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <Header dictionary={dictionary} />
      <div className="h-screen pt-[var(--height-header)]">{children}</div>
    </div>
  )
}
