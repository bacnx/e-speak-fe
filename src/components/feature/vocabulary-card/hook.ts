import { useState } from 'react'
import { toast } from 'sonner'

import { useAudio } from '@/hooks/use-audio'
import { useRecorder } from '@/hooks/use-recorder'
import PhonemesService from '@/services/client-side/phonemes'
import { ModelCheckPhonemes } from '@/services/client-side/types'

export function useVobulary(audioUrl: string, groundTruth: string) {
  const { isPlaying, toggleAudio } = useAudio(audioUrl)
  const { isRecording, toggleRecording, audioBlob: recordedAudio } = useRecorder()
  const [result, setResult] = useState<ModelCheckPhonemes | null>(null)
  const [isChecking, setChecking] = useState(false)

  const onCheckPhonemes = async () => {
    if (!recordedAudio) return

    setChecking(true)

    const res = await PhonemesService.check(recordedAudio, groundTruth)
    if (res.isError) {
      toast(res.message)
    }

    setResult(res.data)
    setChecking(false)
  }

  return {
    isPlaying,
    toggleAudio,
    isRecording,
    toggleRecording,
    recordedAudio,
    onCheckPhonemes,
    isChecking,
    result,
  }
}
