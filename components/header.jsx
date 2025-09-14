import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

const header = () => {
  return (
    <header>
        <nav>
            <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={60} className="h-12 py-1 w-auto object-contain"/>
            </Link>
        </nav>

        <SignedOut>
            <SignInButton />
            <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
            </SignUpButton>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </header>
  )
}

export default header