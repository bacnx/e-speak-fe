'use client'

import { useState } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { XIcon } from 'lucide-react'

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
  const onNext = () => setCurrent(Math.min(current + 1, data.length - 1))
  const progress = Math.round(((current + 1) / data.length) * 100)

  if (data.length === 0) {
    return <div>No data</div>
  }

  const onBack = () => {
    window.location.href = '/learning'
  }

  return (
    <div className="flex flex-col items-center py-4">
      <div className="flex w-full items-center justify-between gap-4">
        <button type="button" className="cursor-pointer text-gray-400" onClick={onBack}>
          <XIcon className="h-7 w-7" />
        </button>
        <Progress value={progress} />
        <span className="p-1 text-2xl font-semibold text-gray-400">{progress}%</span>
      </div>

      <VocabularyCard
        dictionary={dictionary}
        data={data[current]}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  )
}
