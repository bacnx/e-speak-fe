import { LocaleKeys } from '@/types/locales'

interface NavMobileProps {
  dictionary: LocaleKeys
  className?: string
}

export default function NavMobile({ dictionary, className }: NavMobileProps) {
  return <div className={className}>mobile</div>
}
