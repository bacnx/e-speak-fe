'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { LocaleKeys } from '@/types/locales'

import { MenuItems } from './constants'
import { isMatchPathname } from './utils'

interface NavDesktop {
  dictionary: LocaleKeys
  className?: string
}

export default function NavDesktop({ dictionary, className }: NavDesktop) {
  const pathname = usePathname()

  return (
    <div className={cn(className, 'ml-6 flex items-center justify-between gap-2')}>
      {MenuItems.map(({ label, href }) => {
        const isPathMatch = isMatchPathname(pathname, href)
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'rounded px-2 py-1 text-gray-500 hover:bg-gray-500/10',
              isPathMatch && 'text-primary',
            )}
          >
            {dictionary[label]}
          </Link>
        )
      })}
    </div>
  )
}
