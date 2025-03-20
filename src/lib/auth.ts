'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { z } from 'zod'

import { formSchema as loginFormSchema } from '@/components/form/login/schema'
import { formSchema as registerFormSchema } from '@/components/form/register/schema'
import AuthService from '@/services/client-side/auth'
import { useAuthStore } from '@/store/use-auth-store'

export const useLogin = () => {
  const { setUser } = useAuthStore()
  const searchParams = useSearchParams()
  const nextHref = searchParams.get('href') || '/'

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const res = await AuthService.login(values)
    if (res.isError) {
      toast(res.message)
      return
    }
    const user = res.data

    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
    })

    window.location.href = nextHref
  }

  return { form, onSubmit }
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

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    const res = await AuthService.register({
      email: values.email,
      password: values.password,
    })

    if (res.isError) {
      toast(res.message)
      return
    }

    window.location.href = nextUrl
  }

  return { form, onSubmit }
}

export const useSwitchAuthPages = () => {
  const pathname = usePathname()
  const isLoginPage = pathname.includes('/login')
  const nextUrl = isLoginPage
    ? pathname.replace('login', 'register')
    : pathname.replace('register', 'login')

  return { nextUrl, isLoginPage }
}
