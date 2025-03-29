import { default as LessonContent } from '@/components/feature/lesson'
import { WordData } from '@/components/feature/vocabulary-card/types'
import { getDictionary } from '@/dictionaries/get-dictionary'
import VocabularyService from '@/services/server-side/vocabulary'
import { DefaultPageProps } from '@/types/common'
import { LocaleEnum } from '@/types/locales'

interface LessonProps extends DefaultPageProps {
  params: Promise<{
    lang: LocaleEnum
    limit?: number
    pageNumber?: number
    type?: string
    ipa?: string
  }>
}

export default async function Lesson({ params }: LessonProps) {
  const { lang, limit, pageNumber, type, ipa } = await params
  const dictionary = await getDictionary(lang)

  const res = await VocabularyService.getWordList(10)
  if (res.isError) {
    return <div>{res.message}</div>
  }
  const vocabularies = res.data.map<WordData>((value) => ({
    word: value.text,
    translation: value.translation,
    phonetic: value.transcript_ipa,
    audioUrl: value.audio_url,
  }))

  return (
    <div className="container mx-auto w-full px-4 py-2">
      <LessonContent dictionary={dictionary} data={vocabularies} />
    </div>
  )
}
