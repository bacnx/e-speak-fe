import Logo from '@/components/ui/logo'
import ThemeToggle from '@/components/ui/theme-toggle'

import { LocaleKeys } from '@/types/locales'

import NavDesktop from './nav-desktop'
import NavMobile from './nav-mobile'
import SearchButton from './search-button'
import User from './user'

interface HeaderProps {
  dictionary: LocaleKeys
}

export default function Header({ dictionary }: HeaderProps) {
  return (
    <header className="bg-background/80 fixed z-50 w-full border-b backdrop-blur-sm">
      <div className="h-header container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center justify-between gap-4">
          <NavMobile dictionary={dictionary} className="md:hidden" />
          <Logo />
          <NavDesktop dictionary={dictionary} className="max-md:hidden" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <SearchButton />
          <ThemeToggle />
          <User dictionary={dictionary} />
        </div>
      </div>
    </header>
  )
}
