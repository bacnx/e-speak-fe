'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import devLog from '@/lib/dev-log'
import { LocaleKeys } from '@/types/locales'

import { formSchema } from './schema'

interface RegisterFormProps {
  dictionary: LocaleKeys
}

export default function RegisterForm({ dictionary }: RegisterFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    devLog(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.Email}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.Email} type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.Password}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.Password} type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="confirm"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary['Confirm password']}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary['Confirm password']} type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {dictionary.Register}
        </Button>
      </form>
    </Form>
  )
}
