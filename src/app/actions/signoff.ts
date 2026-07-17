'use server'

import pino from 'pino'
import { authServer } from '@/lib/auth/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const logger = pino({name: 'signout-action'})

export async function signOut() {
  const { error } = await authServer.signOut();

  if (error) {
    logger.error({error}, 'Error signing out')
    redirect('/error')
  }

  logger.info('User signed out successfully')
  revalidatePath('/', 'layout')
  redirect('/')
}