
'use client';
import React from 'react'
import Image from 'next/image'

interface dialogItemProps {
  content:string;
  image?:string;
}

const DialogItem: React.FC<dialogItemProps> = ({
  content = "nothing",
  image
}) => {
  return (
    <div className=' p-4 rounded-2xl flex justify-start items-center'>
      <div >
        <Image width={32} height={32} src={`${image ? image : '/images/placeholder.jpg'}`} alt="Avatar" className=' mr-8 rounded-full' />
      </div>
      <div className=' leading-10'>
        {content}
      </div>
    </div>
  )
}

export default DialogItem