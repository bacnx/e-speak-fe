'use client'

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

import { useRegister } from '@/lib/auth'
import { LocaleKeys } from '@/types/locales'

interface RegisterFormProps {
  dictionary: LocaleKeys
}

export default function RegisterForm({ dictionary }: RegisterFormProps) {
  const { form, onSubmit } = useRegister()

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
