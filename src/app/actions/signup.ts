'use server'

import { authServer } from '@/lib/auth/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signup(formData: FormData) {
  // type-casting here for convenience
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
  }

  const { error } = await authServer.signUp.email(data);

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/admin')
}