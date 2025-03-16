import Link from 'next/link'

import { getDictionary } from '@/dictionaries/get-dictionary'
import VocabularyService from '@/services/ssr/vocabulary'
import { DefaultPageProps } from '@/types/common'

export default async function Home({ params }: DefaultPageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  const vocabularies = await VocabularyService.getWordList(10)

  return (
    <div className="container mx-auto w-full px-4">
      {vocabularies.map((vocab) => (
        <Link
          className="hover:text-primary block"
          key={vocab.text}
          href={`/vocabulary/${vocab.text}`}
        >
          {vocab.text}
        </Link>
      ))}
    </div>
  )
}
