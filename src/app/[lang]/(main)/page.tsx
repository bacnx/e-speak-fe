import { getDictionary } from '@/dictionaries/get-dictionary'
import { DefaultPageProps } from '@/types/common'

export default async function Home({ params }: DefaultPageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <div className="h-[200vh]">{dictionary.Hello}</div>
}
