'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { useLogout } from '@/lib/auth'
import { useAuthStore } from '@/store/use-auth-store'
import { LocaleKeys } from '@/types/locales'

interface UserProps {
  dictionary: LocaleKeys
}

export default function User({ dictionary }: UserProps) {
  const { user } = useAuthStore()
  const isAuthenticated = user !== null
  const currentUrl = usePathname()
  const { onLogout } = useLogout()

  let loginUrl = '/login'
  if (!currentUrl.includes('/login')) {
    loginUrl = `/login?href=${encodeURIComponent(currentUrl)}`
  }

  return (
    <div>
      {isAuthenticated ? (
        <Button onClick={onLogout}>{dictionary.Logout}</Button>
      ) : (
        <Link href={loginUrl}>
          <Button>{dictionary.Login}</Button>
        </Link>
      )}
    </div>
  )
}
