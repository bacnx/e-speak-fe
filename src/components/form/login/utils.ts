// TODO: try to use server action
import { z } from 'zod'

import devLog from '@/lib/dev-log'

import { formSchema } from './schema'

export const handleSubmit = (values: z.infer<typeof formSchema>) => {
  devLog(values)
}
