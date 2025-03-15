import { Command, SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function SearchButton() {
  return (
    <Button variant="outline" size="sm">
      <SearchIcon />
      <span className="flex items-center opacity-50">
        {/* why size={14} is not work? */}
        <Command size={14} />K
      </span>
    </Button>
  )
}
