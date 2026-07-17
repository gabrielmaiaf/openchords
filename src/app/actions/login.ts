'use server'

import pino from 'pino'
import { authServer } from '@/lib/auth/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const logger = pino({name: 'login-action'});

export async function login(formData: FormData) {
  // type-casting here for convenience
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await authServer.signIn.email(data);

  if (error) {
    logger.error({error}, 'Error signing in')
    redirect('/error')
  }

  logger.info('User signed in successfully')
  revalidatePath('/', 'layout')
  redirect('/admin')
}