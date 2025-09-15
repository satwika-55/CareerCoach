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
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, StarsIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 ">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">

            <Link href="/">
            <Image src="/vercel.svg" alt="logo" width={200} height={60} className="h-12 py-1 w-auto object-contain"/>
            </Link>

            <div className="flex items-center space-x-2 md:space-x-4">
              <SignedIn>
                <Link href='/dashboard'> 
                <Button variant="outline">
                  <LayoutDashboard className="h-4 w-4"/>
                  <span className="hidden md:block">Industry Insights </span>
                </Button>
                </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button>
                  <StarsIcon className="h-4 w-4"/>
                  <span className="hidden md:block">Growth Tools  </span>
                  <ChevronDown className="h-4 w-4 "/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent> 
                  <DropdownMenuItem>
                    <Link href={"/resume"} clasName="flex items-center gap-2">
                    <FileText className="h-4 w-4"/>
                    <span>Build Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/ai-cover-letter"} clasName="flex items-center gap-2">
                    <FileText className="h-4 w-4"/>
                    <span>Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/interview"} clasName="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4"/>
                    <span>Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button variant="outline">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
        </nav>
    </header>
  );
};

export default header