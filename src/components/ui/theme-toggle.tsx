'use client'

import { useEffect, useState } from 'react'
import { VariantProps } from 'class-variance-authority'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button, buttonVariants } from '@/components/ui/button'

type ThemeToggleProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export default function ThemeToggle({ ...props }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()
  const currentTheme = theme !== 'system' ? theme : systemTheme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="ghost" size="sm" {...props} onClick={toggleTheme}>
      {currentTheme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
