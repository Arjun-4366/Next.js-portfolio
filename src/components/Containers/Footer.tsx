"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  const path = usePathname()

  return path === '/' ? null : (
    <footer className='border-t'>
      <div className='flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 justify-between px-3 py-2'>
        <Image src={"/logo1.jpg"} alt='logo' width={40} height={40} className='rounded-full'/>
        <h3 className=' sm:text-2xl text-xl'>
        Turning <span>ideas</span> into interactive <br />
        <span>web</span> experiences.
        </h3>
      </div>
      <div className=' text-center py-8 text-white'>
        <p >
          Copyright @ 2024-2025. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
