import Link from 'next/link'

import { getDictionary } from '@/dictionaries/get-dictionary'
import VocabularyService from '@/services/server-side/vocabulary'
import { DefaultPageProps } from '@/types/common'

export default async function Home({ params }: DefaultPageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  const res = await VocabularyService.getWordList(10)
  if (res.isError) {
    return <div>{res.message}</div>
  }
  const vocabularies = res.data

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
