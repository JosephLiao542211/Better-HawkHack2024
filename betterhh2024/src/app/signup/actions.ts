'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        options: {
            data: {
                first_name: formData.get('first_name') as string,
            }
        }
    }

    const signup = await supabase.auth.signUp(data)

    if (signup.error) {
        console.log("Sign Up Error")
        redirect('/error')
    }

    const user_data = await supabase.auth.getUser();
    const wallet_insert = await supabase.from('wallets').insert({user_id: user_data.data.user?.id, wallet_address: formData.get('wallet_address'), last_updated_balance: 0})

    if (wallet_insert.error) {
        console.log("Wallet Insert Error")
        console.log(user_data.data.user?.id)
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}