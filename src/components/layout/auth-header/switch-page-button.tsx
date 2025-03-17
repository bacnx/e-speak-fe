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

  return (
    <Link href={isLoginPage ? '/register' : '/login'}>
      <Button>{isLoginPage ? dictionary.Register : dictionary.Login}</Button>
    </Link>
  )
}
