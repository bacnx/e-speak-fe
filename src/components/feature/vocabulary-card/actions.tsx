import { FileCheck2, Loader2, Mic, Pause, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { LocaleKeys } from '@/types/locales'

import { useVobulary } from './hook'
import Result from './result'
import { WordData } from './types'

interface ActionsProps {
  dictionary: LocaleKeys
  wordData: WordData
}

export default function Actions({ dictionary, wordData }: ActionsProps) {
  const {
    isPlaying,
    toggleAudio,
    isRecording,
    toggleRecording,
    recordedAudio,
    onCheckPhonemes,
    isChecking,
    result,
  } = useVobulary(wordData.audioUrl, wordData.phonetic)

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-4">
          <Button variant="secondary" size="lg" className="gap-2" onClick={toggleAudio}>
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            <span className="font-medium">{isPlaying ? dictionary.Stop : dictionary.Listen}</span>
          </Button>
          <Button
            variant={isRecording ? 'destructive' : 'outline'}
            size="lg"
            className="gap-2"
            onClick={toggleRecording}
          >
            <Mic className="h-5 w-5" />
            <span className="font-medium">{isRecording ? dictionary.Stop : dictionary.Record}</span>
          </Button>
        </div>

        <Button disabled={!recordedAudio} onClick={onCheckPhonemes}>
          {isChecking ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <FileCheck2 className="h-5 w-5" />
          )}
          {isChecking ? dictionary.Checking : dictionary.Check}
        </Button>
      </div>

      {result && <Result dictionary={dictionary} result={result} />}
    </>
  )
}
