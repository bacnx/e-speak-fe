import { LocaleKeys } from '@/types/locales'

interface NavDesktop {
  dictionary: LocaleKeys
  className?: string
}

export default function NavDesktop({ dictionary, className }: NavDesktop) {
  return <div className={className}>navbar</div>
}
