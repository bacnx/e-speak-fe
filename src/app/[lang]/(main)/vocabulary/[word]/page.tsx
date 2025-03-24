import { VocabularyCard } from '@/components/feature/vocabulary-card'
import { getDictionary } from '@/dictionaries/get-dictionary'
import VocabularyService from '@/services/server-side/vocabulary'
import { DefaultPageProps } from '@/types/common'
import { LocaleEnum } from '@/types/locales'

interface VocabularyProps extends DefaultPageProps {
  params: Promise<{ lang: LocaleEnum; word: string }>
}

export default async function Vocabulary({ params }: VocabularyProps) {
  const { lang, word } = await params
  const dictionary = await getDictionary(lang)

  const res = await VocabularyService.getWord(word)
  if (res.isError) {
    return <div className="container mx-auto px-4">{res.message}</div>
  }
  const { data } = res

  return (
    <div className="container mx-auto h-full px-4">
      <div className="flex h-full items-center justify-center">
        <VocabularyCard
          dictionary={dictionary}
          wordData={{
            word: data.text,
            translation: data.translation,
            phonetic: data.transcript_ipa,
            audioUrl: data.audio_url,
          }}
        />
      </div>
    </div>
  )
}
