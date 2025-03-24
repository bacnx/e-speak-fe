'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'
import { ModelPhonemeCharacter } from '@/services/client-side/types'

import { getConfidenceColor, getFullCharacters } from './utils'

interface PhoneticDisplayProps {
  characters: ModelPhonemeCharacter[]
  groundTruthBenchmark: string
}

export function PhoneticDisplay({ characters, groundTruthBenchmark }: PhoneticDisplayProps) {
  const fullCharacters = getFullCharacters(characters, groundTruthBenchmark)

  return (
    <div className="flex flex-wrap justify-center gap-1 rounded-lg bg-gray-50 p-2 dark:bg-gray-800">
      <TooltipProvider>
        {fullCharacters.map((charItem) => (
          <Tooltip key={charItem.id}>
            <TooltipTrigger asChild>
              <span
                className={cn(
                  'inline-flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium transition-colors',
                  getConfidenceColor(charItem.confidence),
                )}
              >
                {charItem.char}
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-background text-foreground border-border border">
              <p>Confidence: {(charItem.confidence * 100).toFixed(1)}%</p>
              <p>Start: {charItem.start_offset.toFixed(2)}s</p>
              <p>End: {charItem.end_offset.toFixed(2)}s</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
}
