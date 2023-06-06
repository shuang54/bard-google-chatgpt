'use client';
import React from 'react'
import DialogList from './DialogList'
import MessageBox from './MessageBox'

const DialogBox = () => {
  return (
    <div className=' w-full md:w-4/5 sm:p-0 xs:p-0 lg:4/5  xl:w-8/12 overflow-hidden p-10 pt-0 mb-4 '>
      <div className='h-full w-full  bg-[#f3f6fc] rounded-2xl flex flex-col '>
        <DialogList/>
        <MessageBox/>
      </div>
    </div>
  )
}

export default DialogBox