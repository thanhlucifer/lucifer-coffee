"use client"

import Hero from '@/components/Hero'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      new LocomotiveScroll();
    }

    loadLocomotiveScroll()
  }, [])
  return (
    <div className='h-full overflow-x-hidden'>
      <Hero/>
      {/* temporary div */}
      <div className='h-[4000px]'>

      </div>
    </div>
  )
}

export default Home