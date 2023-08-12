'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthForm() {
  const supabase = createClientComponentClient()
  console.log(supabase);

  return (
    // <Auth
    //   supabaseClient={supabase}
    //   view="magic_link"
    //   appearance={{ theme: ThemeSupa }}
    //   theme="dark"
    //   showLinks={false}
    //   providers={[]}
    //   redirectTo="http://localhost:3000/auth/callback"
    // />
    <Auth
      supabaseClient={supabase}
      appearance={{
        theme: ThemeSupa,
        variables: {
          dark: {
            colors: {
              brandButtonText: 'black',
              brand: 'white',
              brandAccent: 'grey',
            },
          },
        },
      }}
      providers={['github']}
      theme='dark'
      redirectTo='http://localhost:3000/auth/callback'
    />
  )
}