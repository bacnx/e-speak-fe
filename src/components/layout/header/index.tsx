import { LocaleKeys } from '@/types/locales'

import Logo from './logo'
import NavDesktop from './nav-desktop'
import NavMobile from './nav-mobile'
import SearchButton from './search-button'
import User from './user'

interface HeaderProps {
  dictionary: LocaleKeys
}

export default function Header({ dictionary }: HeaderProps) {
  return (
    <>
      <header className="fixed z-50 w-full border-b backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center justify-between gap-4">
            <NavMobile dictionary={dictionary} className="lg:hidden" />
            <Logo />
            <NavDesktop dictionary={dictionary} className="max-lg:hidden" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <SearchButton />
            <User dictionary={dictionary} />
          </div>
        </div>
      </header>
      <div className="h-14" />
    </>
  )
}
