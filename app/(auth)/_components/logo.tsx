import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { dark } from '@clerk/themes'

const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800']
})
export function Logo() {
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <div className='bg-white rounded-full p-1'>
                <Image src="/logo.svg"
                    alt='Next Stream'
                    width="80"
                    height="80"
                />

            </div>
            <div className='flex flex-col items-center'>
                <p className={cn(
                    "text-xl font-semibold ",
                    font.className
                )}>
                    Next Stream
                </p>
                <p className='text-sm text-muted-foreground'>
                    Let&apos; stream
                </p>
            </div>
        </div>
    )
}
