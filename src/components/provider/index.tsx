import { ReactNode } from 'react'

import { ThemeProvider } from './theme-provider'

export function DefaultProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
