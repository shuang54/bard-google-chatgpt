'use client';
import React from 'react'
import Image from 'next/image'

const DialogItemBot = () => {
  return (
    <div className='bg-white p-4 rounded-2xl flex justify-start items-start'>
      <div >
        <Image width={32} height={32} src="/images/sparkle_resting.gif" alt="sparkle_resting" className=' mr-12' />
      </div>
      <div className=' leading-10'>
        <p className='leading-5'>
          I’m Bard, your creative and helpful collaborator. I have limitations and won’t always get it right, but your feedback will help me improve.
        </p>
        <p> Not sure where to start? You can try: </p>
        <p>
          <span className=' text-blue-500 cursor-pointer hover:bg-[#f6fafe]'>
            Draft a design brief for my community bookstore’s new logo
          </span>
        </p>
        <p>

          <span className=' text-blue-500 cursor-pointer hover:bg-[#f6fafe]'>
            Give me landscaping inspiration for my small city backyard
          </span>
        </p>
        <p>

          <span className=' text-blue-500 cursor-pointer hover:bg-[#f6fafe]'>
            Create a vegetarian meal with the following: cauliflower, cucumber, and yogurt
          </span>
        </p>
      </div>
    </div>
  )
}

export default DialogItemBot