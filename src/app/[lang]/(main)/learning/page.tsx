import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { DefaultPageProps } from '@/types/common'

export default async function LearningPage({ params }: DefaultPageProps) {
  return (
    <div className="container mx-auto w-full px-4 py-2">
      <h2 className="text-2xl font-semibold">Learning Page</h2>
      <Link href="/lesson">
        <Button variant="link">Lesson demo</Button>
      </Link>
    </div>
  )
}
