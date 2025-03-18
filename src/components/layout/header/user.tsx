'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

import AuthService from '@/services/csr/auth'
import { LocaleKeys } from '@/types/locales'

interface UserProps {
  dictionary: LocaleKeys
}

export default function User({ dictionary }: UserProps) {
  const isAuthenticated = false
  const currentUrl = usePathname()

  let loginUrl = '/login'
  if (!currentUrl.includes('/login')) {
    loginUrl = `/login?href=${encodeURIComponent(currentUrl)}`
  }

  return (
    <div>
      {isAuthenticated ? (
        <Button onClick={() => AuthService.logout()}>{dictionary.Logout}</Button>
      ) : (
        <Link href={loginUrl}>
          <Button>{dictionary.Login}</Button>
        </Link>
      )}
    </div>
  )
}
