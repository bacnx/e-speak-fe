import Logo from '@/components/ui/logo'
import ThemeToggle from '@/components/ui/theme-toggle'

import { LocaleKeys } from '@/types/locales'

import SwitchPageButton from './switch-page-button'

interface AuthHeaderProps {
  dictionary: LocaleKeys
}

export default function AuthHeader({ dictionary }: AuthHeaderProps) {
  return (
    <header className="fixed w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Logo />
        <div className="flex items-center justify-between gap-4">
          <ThemeToggle />
          <SwitchPageButton dictionary={dictionary} />
        </div>
      </div>
    </header>
  )
}
