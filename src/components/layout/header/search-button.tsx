import { useEffect } from 'react'
import { Command, SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import devLog from '@/lib/dev-log'

export default function SearchButton() {
  // Handle keyboard shortcut (Cmd+K or Ctrl+K)
  const handleShortcut = () => {
    devLog('Search dialog opened')
  }

  // Register keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        handleShortcut()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Button variant="outline" size="sm" onClick={handleShortcut}>
      <SearchIcon />
      <span className="flex items-center opacity-50">
        {/* why size={14} is not work? */}
        <Command size={14} />K
      </span>
    </Button>
  )
}
