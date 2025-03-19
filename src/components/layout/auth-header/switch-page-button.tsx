'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { useSwitchAuthPages } from '@/lib/auth'
import { LocaleKeys } from '@/types/locales'

interface SwitchPageButtonProps {
  dictionary: LocaleKeys
}

export default function SwitchPageButton({ dictionary }: SwitchPageButtonProps) {
  const { nextUrl, isLoginPage } = useSwitchAuthPages()

  return (
    <Link href={nextUrl}>
      <Button>{isLoginPage ? dictionary.Register : dictionary.Login}</Button>
    </Link>
  )
}
