'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { LocaleKeys } from '@/types/locales'

interface SwitchPageButtonProps {
  dictionary: LocaleKeys
}

export default function SwitchPageButton({ dictionary }: SwitchPageButtonProps) {
  const pathname = usePathname()
  const isLoginPage = pathname.includes('/login')
  const nextUrl = isLoginPage
    ? pathname.replace('login', 'register')
    : pathname.replace('register', 'login')

  return (
    <Link href={nextUrl}>
      <Button>{isLoginPage ? dictionary.Register : dictionary.Login}</Button>
    </Link>
  )
}
