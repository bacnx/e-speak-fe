import React from 'react'

import { LocaleKeys } from '@/types/locales'

interface ResultProps {
  dictionary: LocaleKeys
}

export default function Result({ dictionary }: ResultProps) {
  const result = {
    characters: [],
    confident: 0.92,
    groundBenchmark: 'ˈrʌ[ˌ]baʊt dʒi ɛm i ɛf θri naɪn',
    predict: 'ˈrʌbaʊt dʒi ɛm i ɛf θri naɪn',
    phonetic: 'ˈrʌbaʊt dʒi ɛm i ɛf θri naɪn', // Added to match the expected format
  }

  return (
    result && (
      <div className="border-border mt-6 w-full border-t pt-4">
        <p className="text-text-primary mb-4 text-center text-xl font-bold">
          {dictionary.Point}: {Math.round(result.confident * 100)}%
        </p>

        <div className="text-center">
          <p className="text-md text-text-secondary font-medium">
            {dictionary.Phonetic}: <span className="text-text-primary">/{result.phonetic}/</span>
          </p>
        </div>
      </div>
    )
  )
}
