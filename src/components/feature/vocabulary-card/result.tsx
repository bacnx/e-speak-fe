import React from 'react'

import { ModelCheckPhonemes } from '@/services/client-side/types'
import { LocaleKeys } from '@/types/locales'

interface ResultProps {
  dictionary: LocaleKeys
  result: ModelCheckPhonemes
}

export default function Result({ dictionary, result }: ResultProps) {
  return (
    <div className="border-border mt-6 w-full border-t pt-4">
      <p className="text-text-primary mb-4 text-center text-xl font-bold text-green-500">
        {dictionary.Score}: {Math.round(result.confident * 100)}%
      </p>

      <div className="text-center">
        <p className="text-md">
          {dictionary.Phonetic}: <span className="text-text-primary">/{result.predict}/</span>
        </p>
      </div>
    </div>
  )
}
