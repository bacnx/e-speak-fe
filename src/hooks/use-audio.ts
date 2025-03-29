import { useEffect, useRef, useState } from 'react'

export const useAudio = (initUrl: string | null) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!initUrl) return () => {}

    audioRef.current = new Audio(initUrl)

    setIsPlaying(false)

    const handleEnded = () => setIsPlaying(false)
    audioRef.current.addEventListener('ended', handleEnded)

    return () => {
      audioRef.current?.removeEventListener('ended', handleEnded)
      audioRef.current = null // Clean up the audio element
    }
  }, [initUrl])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return {
    isPlaying,
    toggleAudio,
  }
}
