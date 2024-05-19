"use client";
import { useEffect } from 'react';
import App from './App';
import Marketplace from './Marketplace';

import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
      redirect('/login')
  }

  return (
    <>
      <App></App>
      <Marketplace></Marketplace>
    </>
  );
}
