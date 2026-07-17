'use server'

import { authServer } from '@/lib/auth/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import pino from 'pino'

const logger = pino({name: 'signup-action'});

export async function signup(formData: FormData) {
  // type-casting here for convenience
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
  }

  const { error } = await authServer.signUp.email(data);

  if (error) {
    logger.error({error}, 'Error signing up')
    redirect('/error')
  }

  logger.info('User signed up successfully')
  revalidatePath('/', 'layout')
  redirect('/admin')
}