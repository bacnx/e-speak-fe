import { ReactNode } from 'react'

import AuthHeader from '@/components/layout/auth-header'
import { getDictionary } from '@/dictionaries/get-dictionary'
import { LocaleEnum } from '@/types/locales'

export default async function AuthLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: Promise<{ lang: LocaleEnum }>
}>) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <div className="from-secondary/5 to-primary/10 relative h-screen w-full bg-gradient-to-br">
      <div className="from-secondary to-primary fixed bottom-[-50%] left-0 h-full w-[120%] rotate-[-12deg] rounded-t-[10rem] bg-gradient-to-r md:w-[110%]" />
      <AuthHeader dictionary={dictionary} />
      {children}
    </div>
  )
}
