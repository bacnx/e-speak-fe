import React from 'react'

import { PhoneticDisplay } from '@/components/ui/phonetic-display'

import { ModelCheckPhonemes } from '@/services/client-side/types'
import { LocaleKeys } from '@/types/locales'

interface ResultProps {
  dictionary: LocaleKeys
  result: ModelCheckPhonemes
}

export default function Result({ dictionary, result }: ResultProps) {
  return (
    <div className="border-border mt-6 w-full border-t pt-4">
      <p className="text-text-primary mb-4 text-center text-xl font-bold text-green-600 dark:text-green-400">
        {dictionary.Score}: {Math.round(result.confident * 100)}%
      </p>

      <PhoneticDisplay
        characters={result.characters}
        groundTruthBenchmark={result.ground_truth_benchmark}
      />
    </div>
  )
}
