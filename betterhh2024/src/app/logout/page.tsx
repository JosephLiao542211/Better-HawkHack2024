"use client";
import { useEffect } from 'react';
import { signout } from './actions'

export default function LogoutPage() {

    useEffect(() => {
        signout();
    }, [])

    return (
        <>
        </>
    )
}