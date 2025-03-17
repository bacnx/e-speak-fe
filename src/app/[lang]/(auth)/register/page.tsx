import RegisterForm from '@/components/form/register'
import { getDictionary } from '@/dictionaries/get-dictionary'
import { DefaultPageProps } from '@/types/common'

export default async function Register({ params }: DefaultPageProps) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="bg-background relative z-10 w-full max-w-md rounded-3xl p-8 shadow-xl">
        <h2 className="py-4 text-center text-2xl font-bold">
          {dictionary['Seconds to register!']}
        </h2>
        <RegisterForm dictionary={dictionary} />
      </div>
    </div>
  )
}
