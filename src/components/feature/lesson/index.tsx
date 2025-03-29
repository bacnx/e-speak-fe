'use client'

import { useState } from 'react'

import { LocaleKeys } from '@/types/locales'

import { VocabularyCard } from '../vocabulary-card'
import { WordData } from '../vocabulary-card/types'

interface LessonProps {
  dictionary: LocaleKeys
  data: WordData[]
}

export default function Lesson({ dictionary, data }: LessonProps) {
  const [current, setCurrent] = useState(0)
  const onPrevious = () => setCurrent(current - 1)
  const onNext = () => setCurrent(current + 1)

  if (data.length === 0) {
    return <div>No data</div>
  }

  return (
    <div>
      <VocabularyCard
        dictionary={dictionary}
        data={data[current]}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  )
}
