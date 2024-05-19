import { type NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/utils/supabase/server'

export async function GET(request: NextRequest) {
    const supabase = createClient()

    const redirectTo = request.nextUrl.clone()

    const { error } = await supabase.auth.signOut()
    if (!error) {
        redirectTo.pathname = '/error';
        return NextResponse.redirect(redirectTo)
    }
    redirectTo.pathname = '/login';
    return NextResponse.redirect('/login')
}