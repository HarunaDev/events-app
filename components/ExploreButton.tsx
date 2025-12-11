"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExploreButton = () => {
  return (
    <button type='button' id='explore-btn' className='mt-7 mx-auto' onClick={() => console.log('click')}>
        <Link href="#events">Explore Events
            <Image width={24} height={24} src="/icons/arrow-down.svg" alt='arrow-down'/>
        </Link>
    </button>
  )
}

export default ExploreButton