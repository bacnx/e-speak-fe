'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { LocaleKeys } from '@/types/locales'

import Actions from './actions'
import { WordData } from './types'

interface VocabularyCardProps {
  dictionary: LocaleKeys
  data: WordData
  onNext?: () => void
  onPrevious?: () => void
}

export function VocabularyCard({ dictionary, data, onNext, onPrevious }: VocabularyCardProps) {
  return (
    <div className="bg-card dark:shadow-xl-dark dark:hover:shadow-2xl-dark my-6 w-full max-w-lg rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
      {/* Header Section: Word, Phonetic, and Translation */}
      <div className="mb-6 flex items-center justify-between">
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(typeof onPrevious !== 'function' && 'cursor-not-allowed opacity-0')}
          onClick={onPrevious}
          disabled={typeof onPrevious !== 'function'}
        >
          <ChevronLeft className="text-text-secondary h-6 w-6" />
        </Button>

        {/* Word Info */}
        <div className="text-center">
          <h2 className="text-text-primary text-4xl font-extrabold tracking-tight">{data.word}</h2>
          <p className="text-text-secondary mt-1 text-lg font-medium">/{data.phonetic}/</p>
          <p className="text-md text-text-muted mt-1 italic">({data.translation})</p>
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(typeof onNext !== 'function' && 'cursor-not-allowed opacity-0')}
          onClick={onNext}
          disabled={typeof onNext !== 'function'}
        >
          <ChevronRight className="text-text-secondary h-6 w-6" />
        </Button>
      </div>

      <Actions dictionary={dictionary} wordData={data} />
    </div>
  )
}
