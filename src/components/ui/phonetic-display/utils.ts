import { v4 as uuidv4 } from 'uuid'

import { ModelPhonemeCharacter } from '@/services/client-side/types'

export const getFullCharacters = (
  characters: ModelPhonemeCharacter[],
  groundTruthBenchmark: string,
) => {
  const fullCharacters: ModelPhonemeCharacter[] = []
  let charIndex = 0
  let isWrong = false
  groundTruthBenchmark.split('').forEach((char) => {
    if (char === ',') {
      return
    }
    if (char === '[') {
      isWrong = true
      return
    }
    if (char === ']') {
      isWrong = false
      return
    }
    if (isWrong) {
      fullCharacters.push({
        id: uuidv4(),
        char,
        confidence: 0,
        start_offset: 0,
        end_offset: 0,
      })
      return
    }

    const originChar = characters?.[charIndex].char
    if (char === originChar) {
      fullCharacters.push(characters[charIndex])
      charIndex += 1
    }
  })

  return fullCharacters
}

export const getConfidenceColor = (confidence: number) => {
  if (confidence >= 0.8) {
    return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' // High confidence
  }
  if (confidence >= 0.3) {
    return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' // Medium confidence
  }
  return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' // Low confidence
}
