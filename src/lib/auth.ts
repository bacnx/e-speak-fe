'use client'

import { useSearchParams } from 'next/navigation'
import { z } from 'zod'

import { formSchema } from '@/components/form/login/schema'
import AuthService from '@/services/clien-side/auth'
import { useAuthStore } from '@/store/use-auth-store'

export const useLogin = () => {
  const { setUser } = useAuthStore()
  const searchParams = useSearchParams()
  const nextHref = searchParams.get('href') || '/'

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await AuthService.login(values)

    setUser({
      id: res.id,
      name: res.name,
      email: res.email,
    })

    window.location.href = nextHref
  }

  return { onSubmit }
}

export const useLogout = () => {
  const { setUser } = useAuthStore()

  const onLogout = async () => {
    await AuthService.logout()
    setUser(null)
  }

  return { onLogout }
}
