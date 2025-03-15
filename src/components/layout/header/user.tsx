import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { LocaleKeys } from '@/types/locales'

interface UserProps {
  dictionary: LocaleKeys
}

export default function User({ dictionary }: UserProps) {
  const isAuthenticated = true

  return (
    <div>
      {isAuthenticated ? (
        <div>User Info</div>
      ) : (
        <Link href="/login">
          <Button variant="default">Login</Button>
        </Link>
      )}
    </div>
  )
}
