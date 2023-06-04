'use client';
import React from 'react'
import DialogItem from './DialogItem'
import DialogItemBot from './DialogItemBot';
const DialogList = () => {
  return (
    <div className='p-4 basis-10/12'>
      <DialogItemBot isHeader isFooter content='default'/>
    </div>
  )
}

export default DialogList