import { z } from 'zod'

import devLog from '@/lib/dev-log'
import AuthService from '@/services/csr/auth'

import { formSchema } from './schema'

export const handleSubmit = async (values: z.infer<typeof formSchema>) => {
  const res = await AuthService.login(values)
  devLog(res)
}
