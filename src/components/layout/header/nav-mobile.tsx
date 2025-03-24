import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { LocaleKeys } from '@/types/locales'

import { MenuItems } from './constants'

interface NavMobileProps {
  dictionary: LocaleKeys
  className?: string
}

export default function NavMobile({ dictionary, className }: NavMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className={className}>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="bottom" className="gap-0">
        <SheetTitle className="px-12 py-6 text-xl">{dictionary.Menu}</SheetTitle>
        {MenuItems.map(({ label, href }) => (
          <SheetClose key={href} asChild>
            <Link href={href} className="border-t px-12 py-6 text-lg hover:bg-gray-500/10">
              {dictionary[label]}
            </Link>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet>
  )
}
