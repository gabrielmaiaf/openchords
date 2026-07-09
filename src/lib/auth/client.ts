import { createAuthClient } from '@neondatabase/auth';
import { BetterAuthReactAdapter } from '@neondatabase/auth/react';

export const authClient = createAuthClient(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',{
  adapter: BetterAuthReactAdapter(),
});
