import { useAudio } from '@/hooks/use-audio'
import { useRecorder } from '@/hooks/use-recorder'

export function useVobulary(audioUrl: string) {
  const { isPlaying, toggleAudio } = useAudio(audioUrl)
  const { isRecording, toggleRecording, audioUrl: recordedAudioUrl } = useRecorder()

  return {
    isPlaying,
    toggleAudio,
    isRecording,
    toggleRecording,
  }
}
