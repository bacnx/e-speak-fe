import { ReactNode } from 'react'

export default async function EmptyLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return children
}
