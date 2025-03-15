import { ReactNode } from 'react'

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <header>Header</header>
      {children}
    </div>
  )
}
