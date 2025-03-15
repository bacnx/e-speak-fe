import { getDictionary } from '@/dictionaries/get-dictionary'
import { DefaultPageProps } from '@/types/common'

export default async function Home({ params }: DefaultPageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <div>{dictionary.Hello}</div>
}
