'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { z } from 'zod'

import { formSchema as loginFormSchema } from '@/components/form/login/schema'
import { formSchema as registerFormSchema } from '@/components/form/register/schema'
import AuthService from '@/services/clien-side/auth'
import { useAuthStore } from '@/store/use-auth-store'

export const useLogin = () => {
  const { setUser } = useAuthStore()
  const searchParams = useSearchParams()
  const nextHref = searchParams.get('href') || '/'

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
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

export const useRegister = () => {
  const { nextUrl } = useSwitchAuthPages()

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    await AuthService.register({
      email: values.email,
      password: values.password,
    })

    window.location.href = nextUrl
  }

  return { onSubmit }
}

export const useSwitchAuthPages = () => {
  const pathname = usePathname()
  const isLoginPage = pathname.includes('/login')
  const nextUrl = isLoginPage
    ? pathname.replace('login', 'register')
    : pathname.replace('register', 'login')

  return { nextUrl, isLoginPage }
}
