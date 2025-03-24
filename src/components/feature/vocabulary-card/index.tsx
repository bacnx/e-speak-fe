'use client'

import { ChevronLeft, ChevronRight, Mic, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { LocaleKeys } from '@/types/locales'

interface WordData {
  word: string
  translation: string
  phonetic: string
  audioUrl: string
}

interface VocabularyCardProps {
  dictionary: LocaleKeys
  wordData: WordData
  onNext?: () => void
  onPrevious?: () => void
}

export function VocabularyCard({ dictionary, wordData, onNext, onPrevious }: VocabularyCardProps) {
  const isRecording = false
  const emptyFunc = () => {}

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
          <h2 className="text-text-primary text-4xl font-extrabold tracking-tight">
            {wordData.word}
          </h2>
          <p className="text-text-secondary mt-1 text-lg font-medium">/{wordData.phonetic}/</p>
          <p className="text-md text-text-muted mt-1 italic">({wordData.translation})</p>
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

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button variant="ghost" size="lg" className="gap-2" onClick={emptyFunc}>
          <Play className="h-5 w-5" />
          <span className="font-medium">{dictionary.Listen}</span>
        </Button>
        <Button
          variant={isRecording ? 'destructive' : 'outline'}
          size="lg"
          className="gap-2"
          onClick={emptyFunc}
        >
          <Mic className="h-5 w-5" />
          <span className="font-medium">{isRecording ? dictionary.Stop : dictionary.Record}</span>
        </Button>
      </div>
    </div>
  )
}
