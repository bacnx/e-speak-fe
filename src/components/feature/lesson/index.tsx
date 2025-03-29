'use client'

import { useState } from 'react'

import { Progress } from '@/components/ui/progress'

import { LocaleKeys } from '@/types/locales'

import { VocabularyCard } from '../vocabulary-card'
import { WordData } from '../vocabulary-card/types'

interface LessonProps {
  dictionary: LocaleKeys
  data: WordData[]
}

export default function Lesson({ dictionary, data }: LessonProps) {
  const [current, setCurrent] = useState(0)
  const onPrevious = () => setCurrent(Math.max(current - 1, 0))
  const onNext = () => setCurrent(Math.min(current + 1))
  const progress = Math.round(((current + 1) / data.length) * 100)

  if (data.length === 0) {
    return <div>No data</div>
  }

  return (
    <div className="py-4">
      <Progress value={progress} />
      <VocabularyCard
        dictionary={dictionary}
        data={data[current]}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  )
}
